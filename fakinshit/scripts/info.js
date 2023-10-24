var map = L.map('map').setView([-41.4598748,-72.9510897,282], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    
    
    //Centros de salud/Cuidado Personal
    {
        id: 'CENTRO_MEDICO_VICTORIANO',
        name: 'Centro Medico Victoriano',
        image: "images/CENTRO_MEDICO_VICTORIANO/IMG_CENTRO_MEDICO_VICTORIANO_001.jpeg",
        info: {
            direccion: "Avenida Parque Industrial 450",
            telefono: null,
            email: null,
            website: "https://agendamiento.reservo.cl/makereserva/agenda/X0FMr8y0T0ycsv5T4153r7Z6q6l5C6?fbclid=PAAaZ8EwbUj4-JeC1Fp2Mo7afzAM0rb9A5V5hk6RXlv50YUYctyRzOQpeOnH4",
            descripcion: "-MEDICINA GENERAL-NUTRICION-GINECOLOGIA-PSICOLOGIA-ENFERMERIA-MATRONERIAKINESIOLOGIA RESPIRATORIA",
            horarios: "Lunes a Viernes : 10:00 A.M a 19:00 P.M",
            propietario: null
        },
        lat: -41.46044470368143,
        lng: -72.9538604755147,
    },
    {
        id: 'WE_DENT',
        name: 'We dent',
        image: 'images/WE_DENT/IMG_WE_DENT_002.jpeg',
        info: {
            direccion: "Avenida Parque Industrial 481",
            telefono: "+56 9 3517 1320",
            email:'contacto@convenioswedent.cl',
            website: 'https://convenioswedent.cl/',
            descripcion: "Local de servicios de odontologia",
            horarios: 'horario de mañana:(lunes a viernes) 09:00 a.m A 13:00 p.m, Horario de tarde: (lunes a viernes) 14:00 p.m A 19:00 p.m ',
            propietario: 'Empresa(ESAM LIMITADA)'
        },
        lat: -41.46044470368143,
        lng: -72.9538604755147,
    },
    { 
        id: 'KING_CY_BARBERSHOP',
        name: 'King CY BARBERSHOP',
        image: "images/KING_CY_BARBERSHOP/IMG_KING_CY_BARBERSHOP_001.JPG",
        info: {
            direccion: "José Miguel carrera n373",
            telefono: "+56 9 2045112",
            email: null,
            website: null,
            descripcion: "Asesoramiento de imagen y corte de cabello",
            horarios: "10:30 AM a 20:00 PM todos los dias",
            propietario: null
        },
        lat:  -41.46140738281738,
        lng:  -72.94875419540126,
    },

    //Locales centrados en la tecnologia
    { 
        id: 'CYBER_HORNOPIREN',
        name: 'Cyber Hornopiren',
        image: "images/CYBER_HORNOPIREN/IMG_CYBER_HORNOPIREN_002.JPEG",
        info: {
            direccion: "José Miguel Carrera N°212",
            telefono: "652 2255764",
            email: null,
            website: null,
            descripcion: "Cyber, impresiones, fotocopias, anillados",
            horarios: "Lunes a viernes 9:00 AM a 18:00 PM.\nSabado y Domingo CERRADO.",
            propietario: "Jose Canales"
        },
        lat: -41.46086348691203,
        lng: -72.9483535720955,
    },
    { 
        id: 'WOM',
        name: 'WOM',
        image: "images/WOM/IMG_WOM_002.jpeg",
        info: {
            direccion: "Avenida Parque Industrial 450",
            telefono: "+56 9 3522 3070",
            email: null,
            website: "https://www.wom.cl/",
            descripcion: "conexiones inalámbricas y telecomunicaciones",
            horarios: "(lunes a viernes) 10 a.m A 19:00 pm, (sabado) 10 am A 14:00 pm",
            propietario: null
        },
        lat: -41.45989125579157, 
        lng: -72.95373191222319,
    },
    {
        id: 'GRAFICA_FERNANDEZ',
        name: 'Grafica Fernandez',
        image: "images/GRAFICA_FERNANDEZ/IMG_GRAFICA FERNANDEZ_001.jpeg",
        info: {
            direccion: "Jose Miguel Carrera 193-175, Puerto Montt, Los Lagos",
            telefono: "652310254",
            email: null,
            website: "https://www.cylex.cl/puerto-montt/gr%c3%a1fica-fern%c3%a1ndez-11295340.html",
            descripcion: "Publicidad general",
            horarios: "Lunes A Viernes 09:00 A.M a 13:00 P.M, Horaria Tarde de Lunes A Viernes : 15:OO P.M a 18:30 P.M",
            propietario: null
        },
        lat: -41.46178175495399,
        lng: -72.94890643475354,
    },
    // Venta de utilidades variados
    { 
        id: 'VESET',
        name: 'VESET',
        image: "images/VESET/IMG_VESET_001.jpeg",
        info: {
            direccion: "José Miguel Carrera N°240",
            telefono: null,
            email: "rtores@veset.cl",
            website: "veset.cl",
            descripcion: "Empresa de ventas de instrumentación de equipos de pesquera",
            horarios: "Lunes a jueves de 8:30 AM a 13:45 PM y de 14:00 PM a 18:45 PM.\nViernes de 8:30 AM a 13:45 PM.\nSabado y domingo CERRADO.",
            propietario: null
        },
        lat: -41.46001804998867, 
        lng: -72.94811153550964,
    },
    { 
        id: 'VIDRIERIA_CHAMIA',
        name: 'Vidrieria Chamia',
        image: "images/VIDRIERIA_CHAMIA/IMG_VIDRIERIA_CHAMIA_001.JPG",
        info: {
            direccion: "José Miguel carrera N°244",
            telefono: "652264363",
            email: null,
            website: null,
            descripcion: "Tienda de cristales y vidrios",
            horarios: "Lunes a viernes de 9 AM a 13:00 PM y de 14:30 a 18:00 PM\nSabado y domingo de 9 AM a 13:30 PM.",
            propietario: null
        },
        lat: -41.45978144673535,
        lng: -72.9479702329055,
    },
   
    { 
        id: 'CENTRO_DE_BUCEO_ECOSUB',
        name: 'Centro De Buceo Ecosub',
        image: "images/CENTRO_DE_BUCEO_ECOSUB/IMG_CENTRO_DE_BUCEO_ECOSUB_001.jpeg",
        info: {
            direccion: "Calle Panamericana Nte. 510, 5500549 Puerto Montt, Los Lagos",
            telefono: "82158840",
            email: null,
            website: "https://www.ecosub.cl/",
            descripcion: "EMPRESA DE COMPRA DE ARTICULOS RELACIONADOS AL BUCEO",
            horarios: "Horario De Mañana Lunes a Viernes : 9:00 A.M a 17:00 P.M, Horario De Sabado : 10:00 P.M hasta las 13:00 P.M",
            propietario: null
        },
        lat: -41.45759,
        lng: -72.95415,
    },
    { 
        id: 'MAIVA_ENVASES',
        name: 'Maiva Envases',
        image: "images/MAIVA_ENVASES/IMG_MAIVA_ENVASES_002.jpeg",
        info: {
            direccion: "Jose Miguel Carrera N°373, Puerto Montt",
            telefono: "984516353",
            email: "maiva.envases@gmail.com",
            website: null,
            descripcion: "Empresa proveedora de emvases de todo tipo.",
            horarios: 'Lunes a viernes 9:00 AM a 18:30 PM.\nSabado 9:30 AM a 14:00 PM. Domingo CERRADO.',
            propietario: null
        },
        lat: -41.4611044,
        lng: -72.9487533,
    },
    {   
        id: 'MADERAS_EL_CASTOR',
        name: 'Maderas el castor',
        image: "images/MADERAS_EL_CASTOR/IMG_MADERAS_EL_CASTOR_001.jpeg",
        info: {
            direccion: "Avenida Parque Industrial 475",
            telefono: "+56 9 7988 4354",
            email:  null,
            website: " http://www.elcastor.cl/",
            descripcion: "Venta de  maderas (Pino Oregón, Pino Insigne y Maderas Nativas en Puerto Montt)",
            horarios: "(lunes a domingo) 8:30 a.m A 18:00 p.m, ",
            propietario: null
        },
        lat: -41.46074043942762,
        lng: -72.9530957115375,
    },
    //Ferreterias 
    { 
        id: 'SOLMEC',
        name: 'Solmec',
        image: "images/SOLMEC/IMG_SOLMEC_001.jpeg",
        info: {
            direccion: "Jose Miguel Carrera 214",
            telefono: "652266822",
            email: null,
            website: null,
            descripcion: "Ferreteria y Maestranza industrial",
            horarios: null,
            propietario: "Javier Angulo Barria"
        },
        lat: -41.46074799173023,
        lng: -72.94838567147605,
    },
    { 
        id: 'FERRETERIA_RELONCAVI',
        name: 'Ferreteria Reloncavi',
        image: "images/FERRETERIA_RELONCAVI/IMG_FERRETERIA_RELONCAVI_001.JPEG",
        info: {
            direccion: "Parque industrial n°405",
            telefono: "659250377",
            email: "Msalgado@reloncaviservicios.cl",
            website: "http://www.reloncaviservicios.cl/",
            descripcion: "Articulos de ferreteria",
            horarios: "Lunes a viernes 8:30 AM a 18:30 PM.\nSabado y Domingo CERRADO.",
            propietario: null
        },
        lat: -41.46114040581125,
        lng: -72.95001703065795,
    },
    
    {
        id: 'CANNAHUE_HOJALATERIA',
        name: 'cannahuen hojalateria',
        image: null,
        info: {
            direccion: "AMagallanes 398-B",
            telefono: "942029124",
            email: null,
            website: null,
            descripcion: "Local de hojalaterias",
            horarios: null,
            propietario: null
        },
        lat: null,
        lng: null,
    },
    //Servicios de ayuda Sanitaria o Trabajos privados
    {
        id: 'CONTROL_DE_PLAGAS',
        name: 'Control de plagas',
        image: null,
        info: {
            direccion: null,
            telefono: "652255131",
            email:'jefeoperaciones@esamltda.cl',
            website: 'https://www.esamltda.cl/',
            descripcion: "Empresa dedicada al orden ambiental",
            horarios: '08:15 A.M a 13:00 P.M(lunes a viernes(Mañana)),13:30 P.M hasta las 18:00 P.M(lunes a viernes(tarde))',
            propietario: 'Empresa(ESAM LIMITADA)'
        },
        lat: -41.461680247810115,
        lng: -72.94881523964628,
    },
    // Locales Alimenos
    { 
        id: 'AQUI_ESTA_LA_PAPA',
        name: 'Aquí esta la papa',
        image: "images/AQUI_ESTA_LA_PAPA/IMG_AQUI_ESTA_LA_PAPA_001.JPG",
        info: {
            direccion: "Parque Industrial, Puerto Montt, Los Lagos",
            telefono: null,
            email: null,
            website: null,
            descripcion: "Local de venta de alimentos (saco de papa, y trigo)",
            horarios: null,
            propietario: null
        },
        lat: -41.461005372851375,
        lng: -72.95064558496847,
    },
    { 
        id: 'FRUTERIA_EL_EDEN',
        name: 'Fruteria El Eden',
        image: "images/FRUTERIA_EL_EDEN/IMG_FRUTERIA_EL_EDEN_001.jpeg",
        info: {
            direccion: "440 Luis Guerra",
            telefono: "967417196",
            email: null,
            website: null,
            descripcion: "Local de ventas frutas y verduras",
            horarios: "Desde las 8:00 a 21:00",
            propietario: "Jose Conquera "
        },
        lat: -41.46098602835041,
        lng: -72.9512317605798,
    },
    { 
        id: 'LA_GRAN_FERIA_ZUFRUTA_3_0',
        name: 'La Gran feria Zufruta 3.0',
        image: "images/LA_GRAN_FERIA_ZUFRUTA/IMG_LA_GRAN_FERIA_ZUFRUTA_001.jpeg",
        info: {
            direccion: "232 Jose Miguel Carrera",
            telefono: "995112102",
            email: null,
            website: null,
            descripcion: "Fruteria",
            horarios: null,
            propietario: 'Rafael Gonzalez'
        },
        lat: -41.46017978717117,
        lng: -72.94812122582864,
    },
    {   
        id: 'LAS_PAPAS_DE_MUERMO',
        name: 'Las papas de muermo',
        image: "images/LAS_PAPAS_DE_MUERMO/IMG_LAS_PAPAS_DE_MUERMO_001.jpeg",
        info: {
            direccion: "Parque Industrial 108",
            telefono: "965332010",
            email: null,
            website: null,
            descripcion: "Venta de alimentos  (avena, trigo y papas.)",
            horarios: 'Lunes a Viernes: 8:30AM a 10:00PM',
            propietario: null
        },
        lat: -41.4614272,
        lng: -72.9493075,
    },
    // Restaurantes/Comidas
    { 
        id: 'TONNYS_KING',
        name: 'Tonny´s King',
        image: "images/TONNYS_KING/IMG_TONNYS_KING_005.jpeg",
        info: {
            direccion: "Parque Industrial 429, Puerto Montt, Los Lagos",
            telefono: "+56950527949",
            email: null,
            website: null,
            descripcion: "Local de comida rapida",
            horarios: "Lunes a Sabado 10:00/1:00, Domingo 12:00/20:00",
            propietario: "Manuel Valenzuela"
        },
        lat: -41.4611284151355,
        lng: -72.95077873458679,
    },
    {
        id: 'COMPLETOS_CHARLES',
        name: 'Completos charles',
        image: "images/COMPLETOS_CHARLES/IMG_COMPLETOS_CHARLES_001.jpeg",
        info: {
            direccion: "Parque Industrial 108",
            telefono: "56941976594",
            email: null,
            website: null,
            descripcion: "Venta de completos y alimentos variados",
            horarios: null,
            propietario: 'Carlos Astorga'
        },
        lat: -41.46098653922191,
        lng: -72.94794819983693,
    },
    { 
        id: 'EL_MASTICON',
        name: 'El masticon',
        image: "images/EL_MASTICON/IMG_EL_MASTICON_001.jpeg",
        info: {
            direccion: "Avenida Parque Industrial 393 Población Rotonda",
            telefono: "+ 56 958024771",
            email: null,
            website: null,
            descripcion: "Sitio de comida rapida",
            horarios: null,
            propietario: null
        },
        lat: -41.4612624,
        lng: -72.9522994,
    },
    {   
        id: 'TSUKI_FUSION',
        name: 'Tsuki Fusion',
        image: "images/TSUKI_FUSION/IMG_TSUKI_FUSION_001.jpeg",
        info: {
            direccion: "Magallanes 698",
            telefono: "98656792",
            email:  'Tsukifusion@gmail.com',
            website: ' https://tsukifusion.webnode.cl/',
            descripcion: "Sitio de Comida China",
            horarios: 'De las 11:00 a las 21:00',
            propietario: 'Jenifer Degens'
        },
        lat: -41.46084437588396, 
        lng: -72.95156065359845,
    },
    {   
        id: 'ONDE_PANCHITO',
        name: 'Onde Panchito',
        image: "images/ONDE_PANCHITO/IMG_ONDE_PANCHITO_001.jpeg",
        info: {
            direccion: "Av. Parque industrial 410",
            telefono: "966430750",
            email: null,
            website: null,
            descripcion: "Sitio de comidas caseras",
            horarios: '12 a.m  4p.m de Lunes a Viernes, Sabado y Domingo cerrado',
            propietario: null
        },
        lat: -41.46115121390741,
        lng: -72.94992050582246,
    },
    // Locales Mecanicos
    { 
        id: 'MASCAR_RACING',
        name: 'Mascar Racing',
        image: "images/MASCAR_RACING/IMG_MASCAR_RACING_001.jpeg",
        info: {
            direccion: "Los lirios 373",
            telefono: "56973523613",
            email: null,
            website: null,
            descripcion: "lLugar de Mecanica ligera, Alineacion, Balanceo, Neumaticos, Frenos, Diagnostico y Manutencion general",
            horarios: "Lun a Vier 9:00/18:30, Sab 9:00/14:00",
            propietario: null
        },
        lat: -41.460957240346055,
        lng: -72.94880609292974,
    },
    {
        id: 'MB_AUTOMOTRIZ',
        name: 'Mb Automotriz',
        image: "images/MB_AUTOMOTRIZ/IMG_MB_AUTOMOTRIZ_001.jpeg",
        info: {
            direccion: "453 Parque Industrial",
            telefono: "+56986317670",
            email: null,
            website: null,
            descripcion: "Centro mecanico",
            horarios: 'Lunes a Viernes: 9:30AM a 17:30PM',
            propietario: null
        },
        lat: -41.4608193,
        lng: -72.9510124,
    },
    {
        id: 'AUTOMOTRIZ_RAMIREZ',
        name: 'Automotriz Ramirez',
        image: "images/AUTOMOTRIZ_RAMIREZ/IMG_AUTOMOTRIZ_RAMIREZ_001.jpeg",
        info: {
            direccion: "Avenida parque industrial 445",
            telefono: "+56940744272",
            email: null,
            website: null,
            descripcion: "Sitio de Automotriz",
            horarios: null,
            propietario: null
        },
        lat: -41.46096457412498,
        lng: -72.95126938727941,
    },
    {
        id: 'CAR_CLEAN',
        name: 'Car Clean',
        image: "images/CAR_CLEAN/IMG_CAR_CLEAN_001.jpeg",
        info: {
            direccion: "avenida parque industrial 400",
            telefono: "+56 9 5010 8340",
            email:  'carclean57@gmail.com',
            website: null,
            descripcion: "Ofrecen servicio de lavado de autos",
            horarios: null,
            propietario: null
        },
        lat: -41.45976710661611,
        lng: -72.94867002091637,
    },
    { 
        id: 'EDOW_TRIANGLE',
        name: 'Edow Triangle',
        image: "images/EDOW_TRIANGLE/IMG_EDOW_TRIANGLE_001.jpeg",
        info: {
            direccion: "Avenida parque industrial N°381",
            telefono: "+56 988 689 280",
            email: "servitecapuertomontt@gmail.com",
            website: "Servitecapuertomontt.cl",
            descripcion: "Sitio dedicado a venta de neumaticos",
            horarios: "Lunes a viernes 9:30 AM a 18:00 PM.\nSabado y Domingo CERRADO.",
            propietario: "Fredy Bustamante."
        },
        lat: -41.46106716518632,
        lng: -72.94890878756738,
    },
];

var markers = {};

// locations.forEach(function(location) {
//     var marker = L.marker([location.lat, location.lng]);
//     marker.bindPopup(location.name);
//     markers[location.id] = marker;
// });

locations.forEach(function(location) {
  // Si la localizacion no tiene logitud ni latitud no la muestra en el mapa :D
  if (location.lat && location.lng == null) return;

  var marker = L.marker([location.lat, location.lng]);

  /*
  height="240" width="240" style="display: flex; padding: 10px;"
      <table>
        <caption>
            <span class="popupTitle">${location.name}</span>
        </caption>
        <tbody>

        ${
          location.info.direccion
            ? `
            <tr>
                <th scope="row">Dirección</th>
                <td>${location.info.direccion}</td>
            </tr>
            `
            : ``
        } 
        ${
          location.info.website
            ? `
            <tr>
                <th scope="row">Website</th>
                <td><a href="https://${location.info.website}" target="_blank">${location.info.name}</a></td>
            </tr>
            `
            : ``
        } 
        ${
          location.info.horarios
            ? `
            <tr>
                <th scope="row">Horarios</th>
                <td>${location.info.horarios}</td>

            </tr>
            `
            : ``
        } 
      </tbody>
    </table>
    <img src="${location.image}" alt="Imagen de ${
    location.name
   }" style="width: auto; height: 200px;">
  */
  var popupContent = `
  <div>
  <div class="mt-4 border-t border-yellow-100">
    <dl class="divide-y divide-blue-100">
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Nombre</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.name}</dd>
      </div>
      ${
        location.info.email ? 
        `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Email</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.info.email}</dd>
        </div>
      ` : ``
      }
      ${
        location.info.telefono ? 
        `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Telefono</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.info.telefono}</dd>
        </div>
      ` : ``
      }
      ${
        location.info.website ? 
        `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Sitio web</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href="https://${location.info.website}" target="_blank">${location.name}</a></dd>
        </div>
      ` : ``
      }
      ${
        location.info.direccion ? 
        `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Dirección</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.info.direccion}</dd>
        </div>
      ` : ``
      }
      <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt class="text-sm font-medium leading-6 text-gray-900">Descripción</dt>
        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.info.descripcion}</dd>
      </div>
    </dl>
  </div>`;
  marker.bindPopup(popupContent, { minWidth: "640" });
  markers[location.id] = marker;
});

// Función para mostrar u ocultar marcadores según las selecciones de los checkboxes
function actualizarMarcadores() {
    var checkboxes = document.querySelectorAll('.ubicacionCheckbox');
    
    checkboxes.forEach(function(checkbox) {
        var id = checkbox.id;
        if (checkbox.checked) {
            markers[id].addTo(map);
        } else {
            map.removeLayer(markers[id]);
        }
    });
}
// Escuchar el evento de cambio en los checkboxes
document.querySelectorAll('.ubicacionCheckbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', actualizarMarcadores);
});

// Llamar a la función inicialmente para mostrar los marcadores según las selecciones predeterminadas
actualizarMarcadores();

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {


        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});