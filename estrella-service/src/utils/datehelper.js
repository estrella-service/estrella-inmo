import { eachDayOfInterval, format } from 'date-fns';

// TODO : CREAR UNA FUNCION QUE DETERMINE EL INTERVALO DE 15 DIAS PARA LA SEMANA SANTA DEPENDIENDO DEL AÑO
function calcularSemanaSanta(año) {
  const a = año % 19;
  const b = Math.floor(año / 100);
  const c = año % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;

  return { dia: dia, mes: mes }; // Retorna un objeto con el día y mes del domingo de pascua
}
function formatoFecha(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function fechasRelacionadasConPascua(año) {
  const pascua = calcularSemanaSanta(año);
  const fechaPascua = new Date(año, pascua.mes - 1, pascua.dia);

  const fechaAnterior = new Date(fechaPascua);
  fechaAnterior.setDate(fechaPascua.getDate() - 8);

  const fechaPosterior = new Date(fechaPascua);
  fechaPosterior.setDate(fechaPascua.getDate() + 6);

  return {
    fechaAnterior: formatoFecha(fechaAnterior),
    fechaPosterior: formatoFecha(fechaPosterior),
  };
}

export const getDatesBetween = (start, end) => {
  if (start === '' || end === '') return [];
  const interval = { start: new Date(start), end: new Date(end) };
  const dates = eachDayOfInterval(interval);
  dates.pop(); // Elimina la última fecha
  return dates.map((date) => format(date, 'yyyy-MM-dd'));
};

export const getDayType = (date, reservations) => {
  let type = 'none';
  reservations.forEach((reservation) => {
    if (date === reservation.checkIn) {
      type = 'checkIn';
    } else if (date === reservation.checkOut) {
      type = 'checkOut';
    }
  });
  return type;
};

//Uso getSeason(new Date(date)) para obtener la temporada de una fecha

export const getSeason = (dateStart, dateEnd) => {
  const allDays = getDatesBetween(dateStart, dateEnd);
  let season = [];
  const getYear = new Date(dateStart).getFullYear();
  const pascua = fechasRelacionadasConPascua(getYear);
  let isPascua = getDatesBetween(pascua.fechaAnterior, pascua.fechaPosterior);
  isPascua.push(pascua.fechaPosterior);
  for (let i = 0; i < allDays.length; i++) {
    const date = new Date(allDays[i]);

    const month = date.getMonth();

    const day = date.getDate();

    // Temporada alta: 29 de junio - 7 de septiembre
    if ((month === 5 && day >= 29) || (month === 6 && day <= 7)) {
      season.push('alta');
    }

    // Temporada media: abril, mayo, junio hasta el 29, septiembre, octubre, navidades (22 diciembre - 8 enero) y pascuas (13-20 abril)
    if (
      [3, 4, 8, 9].includes(month) ||
      (month === 5 && day < 29) ||
      (month === 11 && day >= 22) ||
      (month === 0 && day <= 8)
    ) {
      season.push('media');
    }

    // Temporada baja: cualquier otra fecha
    season.push('baja');
    if (isPascua.includes(allDays[i])) {
      season.push('media');
    }
  }

  return season.includes('alta')
    ? 'alta'
    : season.includes('media')
    ? 'media'
    : 'baja';
};
