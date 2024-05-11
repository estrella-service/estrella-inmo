import React from 'react';
import { useModal } from '../hooks/use-modal-store';
import { Modal } from './Modal';

const TermsAndConditionsModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === 'terms-and-conditions';

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}>
      <div className='max-w-4xl mx-auto p-6 bg-white shadow-lg rounded'>
        <h1 className='text-lg md:text-2xl font-semibold mb-4'>
          Términos y condiciones - Estrella Service Costa Blanca
        </h1>

        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          1. Su contrato
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Estrella Service COSTA BLANCA, registrada en el registro de la
          Comunidad Valenciana (EEAT-308-A), actúa como agente inmobiliario para
          los propietarios de las propiedades ofrecidas en este sitio web.
          Cualquier contrato es entre los dueños del inmueble y el solicitante.
        </p>

        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          2. Cómo hacer una reserva
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Para que podamos aceptar su reserva, el líder de su grupo debe leer
          estas condiciones. La persona que firma o "envía" el formulario de
          reserva lo hace en nombre de todos los miembros del grupo y los
          vincula conjuntamente a estos términos y condiciones. Cuando nos
          solicite que confirmemos su reserva, le asignaremos la propiedad
          elegida y le confirmaremos su reserva.
        </p>

        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          3. Forma de pago
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Para reservas en libras esterlinas, el pago se puede realizar mediante
          tarjeta de crédito, tarjeta de débito o transferencia bancaria. En
          euros, el pago se puede realizar mediante transferencia bancaria a
          nuestra cuenta. Retendremos su propiedad seleccionada durante 7 días
          mientras organiza el pago, a menos que su reserva deba comenzar en los
          próximos 28 días, en cuyo caso tendrá 48 horas para organizar el pago.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          4. Pago inicial
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Al momento de su reserva se le pedirá que pague un depósito inicial
          del 25% del costo total de la propiedad. Este pago es su único
          compromiso hasta 10 semanas antes de su llegada.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          5. Pago del Saldo
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          El saldo del coste debe pagarse al menos 10 semanas antes de la
          llegada. Asegúrese de realizar el pago dentro de ese tiempo; de lo
          contrario, nos reservamos el derecho de considerar su reserva como
          cancelada, en cuyo caso usted podría tener que pagarnos los cargos de
          cancelación que se detallan a continuación. Si organiza sus vacaciones
          dentro de las 10 semanas posteriores al viaje, deberá realizar el pago
          completo con su reserva.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          6. Si cancelas tu reserva
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Si desea cancelar su reserva deberá hacerlo enviando una confirmación
          por escrito. La persona que firmó/envió el formulario de reserva
          también debe firmar la carta. En caso de cancelación y para compensar
          los gastos de procesamiento de su reserva y cualquier pérdida que
          pueda resultar de no poder revender las vacaciones, cobramos las
          siguientes tarifas de cancelación: *Período antes de la salida dentro
          del cual se cobra la tarifa de cancelación se recibe aviso de
          cancelación (como % del costo total de la reserva)* Más de 71 días:
          Pérdida del depósito 70 - 43 días: 40% 42 - 29 días: 60% 28 - 0 días:
          100%
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          7. Requisitos de seguro
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          El seguro de viajes y vacaciones, incluida la cobertura de
          cancelación, es esencial para su propia protección y le recomendamos
          encarecidamente que usted y todos los miembros de su grupo estén
          debidamente asegurados. Si decide viajar sin una cobertura de seguro
          de vacaciones adecuada, no seremos responsables de ninguna pérdida que
          surja respecto de la cual, de otro modo, habría estado disponible una
          cobertura de seguro.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          8. Depósito por daños
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          No cobramos un depósito por daños, pero cobramos una tarifa
          obligatoria no reembolsable de exención de daños accidentales (ADW) de
          12,50€ por persona, por reserva (no por semana). Esto es para cubrir
          daños accidentales que puedan ocurrir en su propiedad durante sus
          vacaciones, esto le cubrirá hasta el valor de 150,00€ por persona.
          Tenga en cuenta que este cargo no cubre el comportamiento intencional
          y negligente y, si esto ocurre, es posible que se le solicite que
          cubra el costo del daño. Lo mencionado anteriormente es solo para
          reservas estándar; si alquila una propiedad para realizar una función,
          además de la tarifa del lugar, también le solicitaremos un depósito
          adicional por daños.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          9. Datos personales/información del pasaporte
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Según lo exige la ley española, debemos obtener y transmitir a las
          autoridades locales el pasaporte (y otros datos personales) de todos
          los huéspedes mayores de 16 años. Este es el mismo proceso que los
          hoteles al registrar a los huéspedes. Como tal, debes actualizar esta
          información en tu cuenta antes de tu llegada. No proporcionar esta
          información puede resultar en que se le niegue el acceso a su
          propiedad y no se deberá ninguna compensación o reembolso en estas
          circunstancias. Por favor consulte nuestra Política de Privacidad para
          obtener detalles completos sobre cómo recopilamos, tratamos y
          procesamos datos personales.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          10. Tamaño del grupo
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Tenga en cuenta que no se permite la sobreocupación de propiedades.
          Solo los huéspedes que figuran en la lista de huéspedes pueden ocupar
          o visitar la propiedad durante su reserva, a menos que se haya llegado
          a un acuerdo previo por escrito con Estepona Villas en contrario. Esto
          incluye áreas exteriores de propiedades, áreas de piscina y áreas
          comunes de propiedades con piscinas y jardines compartidos. Estepona
          Villas, los propietarios y sus agentes se reservan el derecho de negar
          la entrada y/o exigir a los huéspedes que se vayan si no se cumple
          esta condición. Tenga en cuenta que en estas circunstancias no se
          deberá realizar ningún reembolso. Su lista de invitados puede
          modificarse en cualquier momento antes de su llegada a través de su
          cuenta en línea.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          11. Subarrendamiento y uso comercial
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Los huéspedes no pueden subarrendar ni revender las fechas reservadas.
          La propiedad elegida será utilizada exclusivamente por las personas en
          su lista de invitados. Tampoco está permitido utilizar la propiedad
          con fines comerciales o ilegales.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          12. Problemas con su propiedad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Si tiene algún problema durante sus vacaciones, informe inmediatamente
          al representante local, quien se esforzará por solucionarlo. Si no lo
          hace, no podemos aceptar responsabilidad, ya que no hemos tenido la
          oportunidad de investigar y rectificar el problema. Aunque haremos
          todo lo posible para solucionar los problemas con prontitud, se debe
          dejar un tiempo razonable para que contratistas externos completen las
          reparaciones. En el improbable caso de que un problema no se resuelva
          satisfactoriamente durante su estadía, requerimos una notificación por
          escrito dentro de los 14 días posteriores a la finalización de sus
          vacaciones. Tenga en cuenta que no aceptamos ninguna responsabilidad
          por fallas intermitentes de suministros o servicios públicos como
          agua, electricidad e Internet sobre los cuales no tenemos control, ni
          de sistemas de alcantarillado, plomería o equipos mecánicos en villas,
          pero haremos todo lo posible para organizar la pronta reparaciones
          cuando sea posible.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          13. Horarios de entrada/salida
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Su alojamiento está disponible después de las 3 p. m. del día de
          llegada y debe quedar libre antes de las 10 a. m. del día de salida (a
          menos que se indique lo contrario). La criada, el jardinero y el
          encargado de la piscina necesitan este tiempo para preparar el
          alojamiento adecuadamente para los huéspedes que llegan. Aunque no es
          necesario que desaloje su propiedad antes de las 10 a. m., tenga en
          cuenta que el personal puede llegar antes de esta hora.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          14. Cambio y No Disponibilidad de alojamiento
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          En raras ocasiones, puede ser inevitable cambiar la villa elegida
          debido a circunstancias fuera de nuestro control o del propietario;
          Nos esforzaremos por informarle de esto lo antes posible y ofrecerle
          alojamiento alternativo de nivel similar o superior, un reembolso si
          nada es adecuado o discutir otras opciones. No se considerará ninguna
          reclamación adicional contra el propietario o Estrella Service por
          cualquier pérdida sufrida.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          15. Responsabilidad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Estrella Service no acepta responsabilidad por ningún acto o
          negligencia por parte de los propietarios o cualquier otra persona
          fuera de su empleo o control, ni por ningún accidente, daño, pérdida,
          lesión o gasto, ya sea a persona o propiedad, que el los inquilinos
          pueden sufrir como resultado del alquiler o relacionado de alguna
          manera con él. El propietario y el agente de alquiler tampoco aceptan
          responsabilidad por la pérdida o daño de las posesiones de los
          inquilinos en la propiedad de los propietarios.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          16. Eventos
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Debe informarnos si planea realizar un evento en su propiedad de
          alquiler y solicitar permiso en el momento de la reserva. El
          incumplimiento de las pautas puede resultar en que el propietario o su
          agente cancelen el evento. Tenga en cuenta que cualquier queja de los
          vecinos o acciones legales resultantes de su evento es responsabilidad
          suya y no del propietario ni de Estrella Service COSTA BLANCA.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          17. Peligros de incendio
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Estrella Service COSTA BLANCA no acepta ninguna responsabilidad por
          cualquier daño por incendio negligente causado por los inquilinos.
          Está estrictamente prohibido fumar dentro de todas las propiedades.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          18. Normas de propiedad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Hemos seleccionado e inspeccionado cuidadosamente todas las
          propiedades que anunciamos y nos esforzamos por mantener altos
          estándares. Sin embargo, inevitablemente, los artículos se rompen o
          requieren mantenimiento, por lo tanto, tenga en cuenta que puede
          encontrarse con personal de mantenimiento y jardineros durante su
          estadía. Recuerde también que estas son casas de personas: deje la
          villa en condiciones razonablemente limpias y ordenadas, y retire toda
          la basura al final de su estadía. Nos reservamos el derecho de cobrar
          por limpieza extra y retirada de basura si es necesario, y a cargarlo
          a su tarjeta de crédito o débito.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          19. Precisión
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Nos esforzamos por garantizar que toda la información, incluidas las
          descripciones de las propiedades y las fotografías de nuestro sitio
          web, sean precisas. Sin embargo, ocasionalmente se producen cambios y
          errores y nos reservamos el derecho de corregir los detalles en tales
          circunstancias. Además, los artículos se rompen y, en ocasiones,
          pueden cambiar y, por lo tanto, los muebles, electrodomésticos, etc.
          pueden variar de la copia y las fotografías de nuestro sitio web. No
          asumimos ninguna responsabilidad en caso de que una descripción o una
          fotografía sean inexactas. Si una instalación particular ofrecida en
          una propiedad es esencial para la reserva de sus vacaciones, asegúrese
          de informarnos de ello antes de completar una solicitud de reserva en
          el sitio web.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          20. Disponibilidad de Servicios e Instalaciones
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Ocasionalmente, algunos servicios o instalaciones pueden no estar
          disponibles o su uso puede estar restringido, por ejemplo, pero no
          limitado a, si se requiere mantenimiento o reparación, debido a
          medidas de salud pública, debido a incendios, sequías, tormentas,
          inundaciones, rayos o cualquier otra condición climática adversa. Si
          bien nos esforzaremos por mantener esto al mínimo, Estrella Service no
          se hace responsable y no acepta ninguna responsabilidad en caso de que
          algún servicio o instalación no esté disponible en algún momento
          durante su estadía. Esto incluye, entre otras, instalaciones
          comunitarias como piscinas cubiertas y exteriores, calefacción de
          piscinas, gimnasios, canchas de tenis, instalaciones de spa,
          restaurantes, etc
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          21. Salud y seguridad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Inmediatamente después de llegar a su casa de vacaciones,
          familiarícese con el diseño de la propiedad e identifique cualquier
          peligro potencial, por ejemplo (pero no limitado a) piscinas,
          profundidades de piscinas, jacuzzis, escalones, balcones, áreas de
          baja altura de la cabeza, terreno irregular, puertas de vidrio,
          puertas correderas, etc. Debe asegurarse de que se señalen los
          peligros a los niños y otros miembros de su grupo. Informe al
          representante local si tiene alguna pregunta o inquietud sobre su
          propiedad. El uso de cualquier piscina y/o jacuzzi es bajo su propia
          responsabilidad. Tenga en cuenta que muchas casas españolas tienen
          suelos de baldosas que pueden volverse resbaladizos cuando se mojan (o
          cuando se mojan los pies). Usted es responsable del cuidado y la
          seguridad de usted mismo y de los demás miembros de su grupo.
          Cualquier accidente debe informarse inmediatamente al representante
          local.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          22. Ruido
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Algunas de nuestras propiedades se encuentran en zonas rurales y, por
          lo tanto, es posible que haya ruidos de granja en los alrededores.
          Otras propiedades pueden estar ubicadas en áreas residenciales;
          recuerde que el sonido y el ruido deben mantenerse a niveles
          razonables, especialmente después de las 11 p.m. Esto incluye gritar,
          hablar en voz alta y tocar música en las áreas exteriores. Si se aloja
          en un apartamento, tenga en cuenta que esto también se refiere al uso
          de aparatos eléctricos que causan ruido, como aspiradoras y lavadoras.
          Las quejas relacionadas con el ruido excesivo podrían dar lugar a que
          se solicite a los huéspedes que abandonen la propiedad sin reembolso.
          Es posible que se realicen obras viales y/o de construcción en las
          proximidades de nuestras propiedades sin previo aviso, esto está fuera
          de nuestro control.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          23. Vida silvestre nativa
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Es posible que se encuentre con algunos animales locales, es decir,
          mosquitos, avispas, hormigas, cucarachas, roedores nativos, ratas de
          la fruta, etc. Estrella Service no se hace responsable de su presencia
          o control, aunque haremos todo lo posible para erradicar las plagas. .
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          24. Cajas fuertes
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          En aquellas propiedades que proporcionan una caja fuerte para uso de
          los huéspedes no podemos aceptar responsabilidad por ninguna pérdida
          bajo ninguna circunstancia.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          25. Recepción de televisión
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          La recepción de TV no está garantizada y puede verse afectada por la
          velocidad de Internet y las condiciones atmosféricas (entre otras
          cosas). Estrella Service no se hace responsable de la disponibilidad o
          calidad de recepción de ningún canal de televisión.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          26. Aire Acondicionado
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Aire acondicionado completo significa todos los dormitorios y las
          salas de estar, a menos que se estipule lo contrario, no significa que
          el sistema esté encendido las 24 horas del día. No aceptamos ninguna
          responsabilidad por la avería de estas unidades bajo ningún concepto
          aunque siempre intentaremos subsanar el asunto lo antes posible.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          27. Piscinas/Jacuzzis
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Las piscinas y jacuzzis controlan periódicamente sus niveles químicos.
          Si tiene alguna inquietud sobre piscinas y/o jacuzzis, infórmelo al
          representante local de inmediato. A pesar de los niveles químicos
          correctos, las piscinas/jacuzzis pueden decolorar los trajes de baño y
          algunos tintes de cabello. Esto no significa que el equilibrio químico
          sea incorrecto y no aceptamos ninguna responsabilidad por dicho daño.
          Recomendamos enjuagar todos los trajes de baño en agua dulce después
          de cada baño y usar un champú de baño durante su estadía y hasta 2
          semanas después de la salida (especialmente si tiene el cabello rubio
          y/o teñido).
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          28. Calefacción y luces de piscina
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Hacemos todo lo posible para garantizar que los calentadores de
          piscinas funcionen correctamente, lamentablemente a veces se rompen;
          por lo tanto, si una piscina o jacuzzi no se puede calentar
          satisfactoriamente, nuestra responsabilidad se limitará al monto
          pagado por la calefacción de la piscina o jacuzzi. Aunque la mayoría
          de nuestras piscinas están iluminadas, no anunciamos que tengan luces
          para piscinas, ya que no podemos garantizar que la luz de la piscina
          funcione... son muy sensibles a las fluctuaciones del voltaje
          eléctrico español y la bombilla puede fundirse fácilmente. Reemplazar
          la bombilla o la unidad sellada generalmente significa que hay que
          bajar el agua de la piscina, lo que debido a las regulaciones del agua
          no podemos hacer en los meses de verano.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          29. Propiedades cercanas a campos de golf
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Tenga en cuenta que el riesgo de que pelotas de golf perdidas entren
          en los jardines/patios de propiedades cercanas a campos de golf es
          inevitable
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          30. Seguridad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Cierre con llave todas las puertas y ventanas cuando esté afuera, por
          la noche y cuando se relaje afuera o alrededor de la piscina. No
          aceptamos responsabilidad por ningún robo o pérdida de artículos.
          Asegúrese de contar con un seguro de viaje adecuado para cubrir tales
          eventualidades.
        </p>

        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          31. Mascotas
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Solo algunas de nuestras propiedades aceptan mascotas.
        </p>

        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          32. Idoneidad de la propiedad
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Para garantizar que una propiedad sea adecuada para sus necesidades,
          si hay alguien en su grupo que tiene algún requisito especial, por
          ejemplo (pero no limitado a) debido a movilidad, condición médica o
          edad, infórmenos por escrito antes de reservar. Estaremos encantados
          de asesorarle sobre la idoneidad de una propiedad para sus
          necesidades.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          33. Incluido en el Costo
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Si se hospeda hasta 13 noches, el servicio de limpieza se brindará
          únicamente el día de llegada y el día de salida. Sin embargo, la
          mayoría de las casas tienen lavadoras o, si lo desea, generalmente se
          puede organizar una limpieza y lavandería adicionales por un cargo
          adicional. Si has reservado alojamiento para 14 noches o más, también
          tendrás un cambio de sábanas/toallas a mitad de estancia. Para
          confirmar si su propiedad contará con este servicio por favor
          contáctenos directamente. Mantenimiento de piscina y jardín Todo el
          agua. Todos los impuestos locales y otros impuestos Asistencia de
          nuestro representante local si es necesario (durante el horario de
          oficina a menos que sea una emergencia)
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          34. Visas/Requisitos de viaje
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Es responsabilidad de los huéspedes verificar que cumplan con todos y
          cada uno de los requisitos de viaje, incluidos (entre otros)
          pasaportes y visas, vacunas, requisitos de salud e inmigración
          válidos. Ni Estrella Service, ni el propietario, aceptan ninguna
          responsabilidad en caso de que usted no pueda viajar por no haber
          cumplido con algún requisito de pasaporte, visado, inmigración o
          viaje.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          35. Protección de datos
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Nos tomamos en serio su privacidad. Por favor consulte nuestra
          Política de Privacidad completa.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          36. Fuerza mayor
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          No seremos responsables de reembolsar más allá de lo establecido en la
          cláusula 6 ni de compensar a los huéspedes en relación (total o
          parcialmente) por una situación de "Fuerza mayor". Una Fuerza Mayor
          incluye cualquier evento, acto, omisión o acción (o una serie de
          ellas) que esté fuera de nuestro control razonable. Por ejemplo, entre
          otros, disturbios, disturbios civiles, disputas industriales,
          desastres naturales o nucleares, tormentas, inundaciones, vientos,
          relámpagos, sequías (o cualquier otra condición climática adversa),
          incendios, riesgos para la salud humana, como el brote de una
          enfermedad grave, una epidemia o pandemia, cambios en las leyes,
          desastres naturales, casos fortuitos, explosiones, incendios,
          disturbios, ataques terroristas (o amenazas de los mismos), guerras,
          incluidos conflictos armados (o amenazas de los mismos) y todos los
          eventos similares que lo hagan Difícil/imposible viajar con seguridad,
          permanecer en la propiedad elegida o afectar las comodidades de la
          misma.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          37. Ley aplicable y jurisdicción
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          La validez, construcción y ejecución de este Acuerdo se regirán por la
          ley española. Todos los huéspedes se someten a la jurisdicción
          exclusiva de los tribunales españoles.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          38. Blue Pencil Rule.
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Si alguna de estas condiciones se determinara ilegal, inválida o de
          otro modo inaplicable por razón de las leyes de cualquier estado o
          país en el que estas condiciones se pretenden efectivas, entonces, en
          la medida y dentro de la jurisdicción en que dicho término o condición
          sea ilegal, inválido o inaplicable, será eliminado y excluido de esa
          cláusula y los términos y condiciones restantes sobrevivirán, seguirán
          en plena vigencia y efecto y continuarán siendo vinculantes y
          ejecutables.
        </p>
        <h2 className='text-lg md:text-xl font-semibold mt-6 mb-2'>
          39. Derechos de autor
        </h2>
        <p className='mb-4 text-sm md:text-lg'>
          Todo el contenido de este sitio web, incluidos (entre otros) nombres
          comerciales, textos, políticas, fotografías, gráficos, videos,
          software y diseño, es propiedad de Estrella Service COSTA BLANCA o
          tiene licencia para ello. Todo el contenido de este sitio web está
          protegido. por la ley de derechos de autor. No se le permite, sin
          nuestro consentimiento previo por escrito, copiar, transmitir,
          reproducir, publicar, mostrar, distribuir, almacenar, modificar o
          adaptar este sitio web, su contenido o el software subyacente, excepto
          para uso personal no comercial.
        </p>
      </div>
    </Modal>
  );
};

export default TermsAndConditionsModal;
