import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-lg rounded'>
      <h1 className='text-2xl font-semibold mb-4'>
        Política de Privacidad - Estrella Service Costa Blanca
      </h1>
      <p className='mb-4'>
        Estrella Service Costa Blanca (“Nosotros”) estamos comprometidos a
        proteger y respetar su privacidad.
      </p>
      <p className='mb-4'>
        Esta política (junto con nuestros términos de uso y cualquier otro
        documento mencionado en él) establece la base sobre la cual procesaremos
        cualquier dato personal que recopilemos de usted, o que usted nos
        proporcione. Al visitar{' '}
        <a
          href='https://www.estrellaservice.com'
          className='text-blue-500 hover:underline'>
          https://www.estrellaservice.com
        </a>{' '}
        usted acepta y consiente las prácticas descritas en esta política.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Qué información recopilamos?
      </h2>
      <p className='mb-4'>
        Recopilaremos y procesaremos los siguientes datos sobre usted:
      </p>
      <ol className='list-decimal pl-8 mb-4'>
        <li>Información que usted nos proporciona.</li>
        <li>Información que recopilamos sobre usted.</li>
      </ol>

      <h3 className='text-lg font-semibold mt-4 mb-2'>Cookies</h3>
      <p className='mb-4'>
        Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios de
        nuestro sitio web. Esto nos ayuda a brindarle una buena experiencia
        cuando navega por nuestro sitio web y también nos permite mejorarlo.
        Para obtener información detallada sobre las cookies que utilizamos y
        los fines para los que las utilizamos consulte nuestra Política de
        Cookies.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Cómo utilizamos ésta información?
      </h2>
      <p className='mb-4'>
        Podemos utilizar su información de las siguientes maneras:
      </p>
      <ul className='list-disc pl-8 mb-4'>
        <li>
          Para llevar a cabo nuestras obligaciones derivadas de cualquier
          contrato celebrado entre usted y nosotros y para proporcionarle la
          información, productos y servicios que nos solicite;
        </li>
        <li>
          Para fines estadísticos internos para ayudarnos a evaluar nuestra gama
          de servicios;
        </li>
        <li>Para notificarle sobre cambios en nuestro servicio;</li>
      </ul>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Compartimos tu información?
      </h2>
      <p className='mb-4'>
        Usted acepta que tenemos derecho a compartir su información personal con
        ciertos terceros mencionados en el documento.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Dónde almacenamos su información personal?
      </h2>
      <p className='mb-4'>
        Tomaremos todas las medidas razonablemente necesarias para garantizar
        que sus datos sean tratados de forma segura y de acuerdo con esta
        política de privacidad.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Durante cuánto tiempo conservaremos su información?
      </h2>
      <p className='mb-4'>
        Solo almacenaremos información durante el tiempo necesario para
        completar su reserva con nosotros y/o para cumplir con los requisitos
        legales. Cuando su información personal ya no sea necesaria, nos
        aseguraremos de que se elimine de forma segura.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        Cambios en nuestra Política de Privacidad
      </h2>
      <p className='mb-4'>
        Cualquier cambio que realicemos en nuestra política de privacidad se
        publicará en esta página. Vuelva a consultar con frecuencia para ver
        actualizaciones o cambios en nuestra política de privacidad.
      </p>

      <h2 className='text-xl font-semibold mt-6 mb-4'>
        ¿Preguntas sobre esta política de privacidad?
      </h2>
      <p className='mb-4'>
        Por favor contáctenos a través de nuestro formulario en línea.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
