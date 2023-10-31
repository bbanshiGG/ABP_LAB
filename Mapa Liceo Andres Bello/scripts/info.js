var map = L.map('map').setView([-41.4598748, -72.9510897, 282], 15);
// Se crea un mapa Leaflet con una vista inicial en las coordenadas especificadas.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// Se agrega una capa de azulejos (tiles) de OpenStreetMap al mapa

var locations = [
// Lista de ubicaciones con detalles, incluyendo nombre, imagen, información, coordenadas, etc.


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
            descripcion: "Centro medico de nutrición, ginecología, etc.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>10:00 A.M a 19:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '10',
            minutosInicio: null,
            horaTermino: '19',
            minutosTermino: null,
            propietario: null
        },
        lat: -41.460576623978795,
        lng: -72.95382274095832,
    },
    // {
    //     id: 'MECHAS_BARBERSHOP',
    //     name: 'Mechas Barbershop',
    //     image: null,
    //     info: {
    //         direccion: null,
    //         telefono: null,
    //         email: null,
    //         website: null,
    //         descripcion: null,
    //         horarios: null,
    //         propietario: null
    //     },
    //     lat: -41.45986602099699,  
    //     lng: -72.95347789912249,
    // },
    {
        id: 'WE_DENT',
        name: 'We dent',
        image: 'images/WE_DENT/IMG_WE_DENT_002.jpeg',
        info: {
            direccion: "Avenida Parque Industrial 481",
            telefono: "+56 9 3517 1320",
            email: 'contacto@convenioswedent.cl',
            website: 'https://convenioswedent.cl/',
            descripcion: "Local de servicios de odontología.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 13:00 P.M<br>14:00 P.M a 19:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '19',
            minutosTermino: null,
            propietario: 'ESAM LIMITADA'
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
            descripcion: "Asesoramiento de imagen y corte de cabello.",
            horarios: "10:30 AM a 20:00 PM todos los dias",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Domingo:</span><br>10:30 A.M a 20:00 P.M`,
            horaInicio: '10',
            minutosInicio: '30',
            horaTermino: '20',
            minutosTermino: null,
            propietario: null
        },
        lat: -41.46140738281738,
        lng: -72.94875419540126,
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
            descripcion: "Cyber en el que puedes sacar impresiones, fotocopias y anillados.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 18:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '18',
            minutosTermino: null,
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
            descripcion: "Conexiones inalámbricas y telecomunicaciones.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes de:</span><br>10:00 AM a 19:00 PM<br><span class='underline decoration-indigo-500 font-bold'>Sabado de:</span><br>10:00 AM a 14:00 PM.<br><span class='underline decoration-indigo-500 font-bold'>Domingo:</span><br><span class='font-bold'>CERRADO.</span>",
            horaInicio: '10',
            minutosInicio: null,
            horaTermino: '19',
            minutosTermino: null,
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
            descripcion: "Sitio dedicado a la publicidad.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 13:00 P.M<br>15:00 P.M a 18:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '18',
            minutosTermino: '30',
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
            descripcion: "Lugar de ventas de instrumentación de equipos de pesquera.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Jueves:</span><br>8:30 A.M a 13:45 P.M<br>14:00 P.M a 18:45 P.M<br><span class='underline decoration-indigo-500 font-bold'>Viernes de:</span><br><span class="font-bold">8:30 A.M a 13:45 P.M</span><br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '8',
            minutosInicio: '30',
            horaTermino: '18',
            minutosTermino: '45',
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
            descripcion: "Tienda de ventanas y vidrios.",            
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 13:00 P.M<br>14:30 P.M a 18:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>9:00 AM a 13:30 P.M</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '18',
            minutosTermino: null,
            propietario: null        },
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
            descripcion: "Lugar de ventas sobre articulos destinados al buceo.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 17:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>10:00 A.M a 13:00 P.M</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '17',
            minutosTermino: null,
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
            descripcion: "Empresa proveedora de envases de todo tipo.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 18:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado:</span><br><span class='font-bold'>9:30 A.M a 14:00 P.M</span><br><span class='underline decoration-indigo-500 font-bold'>Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '9',
            minutosInicio: null,
            horaTermino: '18',
            minutosTermino: '30',
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
            email: null,
            website: " http://www.elcastor.cl/",
            descripcion: "Venta de  maderas (Pino Oregón, Pino Insigne y Maderas Nativas en Puerto Montt).",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Domingo:</span><br>8:30 A.M a 18:00 P.M`,
            horaInicio: '8',
            minutosInicio: '30',
            horaTermino: '18',
            minutosTermino: null,
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
            descripcion: "Ferreteria y maestranza industrial.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>`,
            horaInicio: null,
            minutosInicio: null,
            horaTermino: null,
            minutosTermino: null,
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
            descripcion: "Articulos de ferretería.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>8:30 A.M a 18:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            horaInicio: '8',
            minutosInicio: '30',
            horaTermino: '18',
            minutosTermino: '30',
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
            descripcion: "Local de hojalaterias.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>`,
            horaInicio: null,
            minutosInicio: null,
            horaTermino: null,
            minutosTermino: null,
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
            email: 'jefeoperaciones@esamltda.cl',
            website: 'https://www.esamltda.cl/',
            descripcion: "Empresa dedicada al orden ambiental.",
            horarios: `<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>8:15 A.M a 13:00 P.M<br>13:30 P.M a 18:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>`,
            horaInicio: '8',
            minutosInicio: '15',
            horaTermino: '18',
            minutosTermino: '30',
            propietario: 'ESAM LIMITADA'
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
            descripcion: "Local de venta de alimentos (saco de papa, y trigo).",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            descripcion: "Local de alimentos frutas y verduras.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>8:00 A.M a 21:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            propietario: "Jose Conquera ",
            horaInicio: '8',
            minutosInicio: '0',
            horaTermino: '21',
            minutosTermino: '0',

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
            descripcion: "Frutería.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            descripcion: "Venta de alimentos  (avena, trigo y papas.).",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>8:30 A.M a 10:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            propietario: null,
            horaInicio: '8',
            minutosInicio: '30',
            horaTermino: '22',
            minutosTermino: '0'
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
            descripcion: "Local de comida rapida.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Sabado:</span><br>10:00 A.M a 13:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Domingo:</span><br>10:00 A.M a 1:00 P.M<br>",
            propietario: "Manuel Valenzuela",
            horaInicio: '10',
            minutosInicio: '0',
            horaTermino:'13',
            minutosTermino:'0'
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
            descripcion: "Venta de completos y alimentos variados.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            descripcion: "Sitio de comida rapida.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            email: 'Tsukifusion@gmail.com',
            website: ' https://tsukifusion.webnode.cl/',
            descripcion: "Sitio de Comida China.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Domingo:</span><br>11:00 A.M a 21:00 P.M",
            propietario: 'Jenifer Degens',
            horaInicio: '11',
            minutosInicio: '0',
            horaTermino:'21',
            minutosTermino:'0'
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
            descripcion: "Sitio de comidas caseras.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>12:00 A.M a 16:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            propietario: null,
            horaInicio: '12',
            minutosInicio: '0',
            horaTermino:'16',
            minutosTermino:'0'
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
            descripcion: "Lugar de Mecanica ligera, Alineacion, Balanceo, Neumaticos, Frenos, Diagnostico y Manutencion general",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:00 A.M a 18:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado:</span><br><span class='font-bold'>9:00 A.M a 14:00 P.M</span><br><span class='underline decoration-indigo-500 font-bold'>Domingo:</span><br><span class='font-bold'>CERRADO</span>`",
            propietario: null,
            horaInicio: '9',
            minutosInicio: '0',
            horaTermino:'18',
            minutosTermino:'30'            
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
            descripcion: "Centro mecanico.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:30 A.M a 17:30 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            propietario: null,
            horaInicio: '9',
            minutosInicio: '30',
            horaTermino:'17',
            minutosTermino:'30'       
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
            descripcion: "Sitio de automotriz.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            email: 'carclean57@gmail.com',
            website: null,
            descripcion: "Ofrecen servicio de lavado de autos.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>NO CONTAMOS CON ESTA INFORMACIÓN</span>",
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
            descripcion: "Sitio dedicado a venta de neumaticos.",
            horarios: "<span class='underline decoration-indigo-500 font-bold'>Lunes a Viernes:</span><br>9:30 A.M a 18:00 P.M<br><span class='underline decoration-indigo-500 font-bold'>Sabado y Domingo:</span><br><span class='font-bold'>CERRADO</span>",
            propietario: "Fredy Bustamante.",
            horaInicio: '9',
            minutosInicio: '30',
            horaTermino:'18',
            minutosTermino:'0'  
        },
        lat: -41.46106716518632,
        lng: -72.94890878756738,
    },
];

var markers = {};
// Se crea un objeto vacío para almacenar marcadores.

locations.forEach(function (location) {
    // Para cada ubicación en la lista, se crea un marcador y se define su contenido emergente (o popup).
    if (location.lat && location.lng == null) return;
    // Si la ubicación no tiene coordenadas válidas, se omite y no se muestra en el mapa.

   // Se crea un marcador en las coordenadas de la ubicación.
    var marker = L.marker([location.lat, location.lng]);
    
    // Se construye el contenido emergente (popup) con detalles de la ubicación.
    var popupContent = `
  <div class="flex flex-row gap-4">
  <div class="flex-initial w-72 mt-4 border-t border-yellow-100">
    <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">${location.name ?? 'No tenemos información sobre el nombre'}</h3>
    </div>
    <dl class="divide-y divide-blue-100">
    `
    if (location.info.email) popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Email</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href="mailto:${location.info.email}">${location.info.email}</a></dd>
          </div>`

    if (location.info.telefono) popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Telefono</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href="tel:${location.info.telefono}">${location.info.telefono}</a></dd>
        </div>`
        
    if (location.info.website) popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Sitio web</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><a href="https://${location.info.website}" target="_blank">${location.name}</a></dd>
        </div>`

    if (location.info.direccion) popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-['Exo 2']">Dirección</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${location.info.direccion}</dd>
        </div>`
    
    if (location.info.descripcion) popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Descripción</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 overflow-auto">${location.info.descripcion}</dd>
        </div>`

    if (location.info.horarios) {
        popupContent += `
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900 font-sans">Horarios<br><span class='font-bold py-4 font-serif'>${estaAbierto(location.info.horaInicio, location.info.horaTermino, location.minutosInicio, location.info.minutosTermino) ? "ABIERTO" : "CERRADO"}</span></dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 overflow-auto">${location.info.horarios}</dd>
        </div>`
    }
    popupContent += `</dl> </div>`

    if (location.image) popupContent += `<img src="${location.image}" alt="Imagen de ${location.name}" class="flex-1 w-36 h-auto rounded">`

    popupContent += `</div>`;
    // Se vincula el contenido emergente al marcador.
    marker.bindPopup(popupContent, { minWidth: "640" });
     // Se agrega el marcador al objeto de marcadores utilizando el ID de la ubicación como clave.
    markers[location.id] = marker;
});



function estaAbierto(horaInicio, horaTermino, minutosInicio = 0, minutosTermino = 0) {
    var start = horaInicio * 60 + minutosInicio;
    var end = horaTermino * 60 + minutosTermino;
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
}

// Función para mostrar u ocultar marcadores según las selecciones de los checkboxes
function actualizarMarcadores() {
    var checkboxes = document.querySelectorAll('.ubicacionCheckbox');

    checkboxes.forEach(function (checkbox) {
        var id = checkbox.id;
        if (checkbox.checked) {
        // Si el checkbox está marcado, se agrega el marcador al mapa.
            markers[id].addTo(map);
        } else {
        // Si el checkbox no está marcado, se quita el marcador del mapa.
            map.removeLayer(markers[id]);
        }
    });
}
// Escuchar el evento de cambio en los checkboxes
document.querySelectorAll('.ubicacionCheckbox').forEach(function (checkbox) {
    checkbox.addEventListener('change', actualizarMarcadores);
});

// Llamar a la función inicialmente para mostrar los marcadores según las selecciones predeterminadas
actualizarMarcadores();

// Funcionalidad para expandir/colapsar detalles de ubicaciones en la lista.
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