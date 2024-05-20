import { saveAs } from 'file-saver';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { useParams } from 'react-router-dom';
import { useHouses } from '../context/houses-context';
import { useEffect } from 'react';

const CreatePDF = () => {
  const { id } = useParams();
  const { getReservationById, currentReservation } = useHouses();

  useEffect(() => {
    const reservation = getReservationById(id);
    console.log('reservation', reservation);
  }, [id, getReservationById]);
  const datosEmpresa = {
    nombreEstablecimiento: 'Estrella Service COSTA BLANCA',
    nif: 'X0590053B',
    municipio: 'Calpe',
    provincia: 'Alicante',
  };
  const createPDFformData = async (data) => {
    // Crear un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // Tamaño A4
    const { width, height } = page.getSize();
    const smallFontSize = 10;
    const fontSize = 12;
    const fontTitleSize = 16;
    const fontBoldSize = 14;

    // Fuente estándar
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBoldFont = await pdfDoc.embedFont(
      StandardFonts.TimesRomanBold
    );

    // Títulos
    page.drawText('HOJA-REGISTRO DE VIAJEROS', {
      x: width / 2 - 100,
      y: height - 50,
      size: fontTitleSize,
      font: timesRomanBoldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText('DATOS DEL ESTABLECIMIENTO', {
      x: 50,
      y: height - 90,
      size: fontBoldSize,
      font: timesRomanBoldFont,
      color: rgb(0, 0, 0),
    });

    // Datos de la empresa
    page.drawText(`Parte n.º: ______________________`, {
      x: 50,
      y: height - 120,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      `Nombre del establecimiento: ${datosEmpresa.nombreEstablecimiento}`,
      {
        x: 50,
        y: height - 140,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(`NIF: ${datosEmpresa.nif}`, {
      x: 50,
      y: height - 160,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Municipio: ${datosEmpresa.municipio}`, {
      x: 50,
      y: height - 180,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Provincia: ${datosEmpresa.provincia}`, {
      x: 50,
      y: height - 200,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText('Sello del establecimiento ', {
      x: width / 2,
      y: height - 220,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // Datos del viajero
    page.drawText('DATOS DEL VIAJERO', {
      x: 50,
      y: height - 260,
      size: fontBoldSize,
      font: timesRomanBoldFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Núm. de documento de identidad: ${data.numeroDocumento}`, {
      x: 50,
      y: height - 280,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Tipo de documento: ${data.tipoDocumento}`, {
      x: 50,
      y: height - 300,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Fecha expedición del documento: ${data.fechaExpedicion}`, {
      x: 50,
      y: height - 320,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Apellidos: ${data.primerApellido}`, {
      x: 50,
      y: height - 340,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Nombre: ${data.nombre}`, {
      x: 50,
      y: height - 360,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Sexo: ${data.sexo}`, {
      x: 50,
      y: height - 380,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Fecha de nacimiento: ${data.fechaNacimiento}`, {
      x: 50,
      y: height - 400,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`País de nacionalidad: ${data.paisNacionalidad}`, {
      x: 50,
      y: height - 420,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Fecha de entrada: ${data.fechaEntrada}`, {
      x: 50,
      y: height - 440,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      `..................................., de ........... de ......................`,
      {
        x: 50,
        y: height - 480,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText('Firma del viajero (5)', {
      x: 50,
      y: height - 500,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // Texto en el pie de página
    const footerText =
      'La recogida y  tratamiento se hará de acuerdo con la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal y al amparo de lo dispuesto en el artículo 12.1 de la Ley Orgánica 1/1992, de 21 de febrero, sobre Protección de la Seguridad Ciudadana';
    page.drawText(footerText, {
      x: 50,
      y: height - 550,
      size: smallFontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
      maxWidth: width - 100, // Ajustar el ancho máximo del texto para que no se salga de la página
    });

    // Guardar el PDF en un blob
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Descargar el archivo PDF
    saveAs(blob, `viajero_${data.nombre}.pdf`);
  };
  return (
    <div className='mb-3 flex-1 p-4'>
      {currentReservation && (
        <>
          <h1 className='text-xl mb-3'>
            <strong> Datos de los Viajeros de la Reserva nº:</strong>{' '}
            {currentReservation._id}
          </h1>
          <div className=''>
            {currentReservation.viajeros?.map((guest, index) => (
              <div
                key={index}
                className='flex items-start flex-col border-2 border-gray-500 rounded-lg p-3'>
                <h2>
                  <strong>Nombre:</strong> {guest.nombre}
                </h2>
                <p>
                  <strong>Apellidos:</strong> {guest.primerApellido}
                </p>
                <p>
                  {guest.tipoDocumento} {guest.numeroDocumento}
                </p>
                <p>
                  <strong>Fecha de Expedicion:</strong> {guest.fechaExpedicion}
                </p>
                <p>
                  <strong>Fecha de Nacimiento:</strong> {guest.fechaNacimiento}
                </p>
                <p>
                  <strong>Nacionalidad:</strong> {guest.paisNacionalidad}
                </p>
                <p>
                  <strong>Genero: </strong>
                  {guest.sexo}
                </p>
                <p>
                  <strong>Fecha de Entrada:</strong> {guest.fechaEntrada}
                </p>

                <button
                  onClick={() => createPDFformData(guest)}
                  className='bg-[#0e2235] text-white font-serif py-2 px-3 flex items-center gap-3 rounded-md w-fit self-end text-xs'>
                  Descargar PDF
                </button>
              </div>
            ))}
          </div>{' '}
        </>
      )}
    </div>
  );
};

export default CreatePDF;
