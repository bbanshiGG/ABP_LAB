PE html>
<html lang="es-CL">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles2.css">
    <script src="scripts/deplegable.js" async></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <title>LICEO ANDRÉS BELLO | MAPA</title>
</head>

<body>
   
    <span class="horizontal-list">
        <a href="http://liceoandresbellopm.cl/"><img src="images/IMAGENES_PAG/INSIGNIA_LICEO.png" alt width="40px"></a>
        <h1>Liceo Andres Bello</h1>
    </span>
    <div class="wrapper">
        <nav class="nav">
                <ul class="list">
                <li class="list__item list__item--click">
                <div class="list__button list__button--click">
                    <i class="bi bi-caret-right-fill"></i>
                    <a href="#" class="nav__link">Centros de salud/Cuidado Personal</a>
                    <i class="bi bi-arrow-down-left list__arrow"></i>
                    
                </div>
                <ul class="list__show">
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="VESET" class="ubicacionCheckbox">
                            <label for="VESET">Veset</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="VIDRIERIA_CHAMIA" class="ubicacionCheckbox">
                            <label for="VIDRIERIA_CHAMIA">Vidrieria Chamia</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="CYBER_HORNOPIREN" class="ubicacionCheckbox">
                            <label for="CYBER_HORNOPIREN">Cyber Hornopiren</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="FERRETERIA_RELONCAVI" class="ubicacionCheckbox">
                            <label for="FERRETERIA_RELONCAVI">Ferreteria Reloncavi</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="CENTRO_DE_BUCEO_ECOSUB" class="ubicacionCheckbox">
                            <label for="CENTRO_DE_BUCEO_ECOSUB">Centro de buceo ECOSUB</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="SOLMEC" class="ubicacionCheckbox">
                            <label for="SOLMEC">SOLMEC</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="WOM" class="ubicacionCheckbox">
                            <label for="WOM">WOM</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="CANNAHUE_HOJALATERIA" class="ubicacionCheckbox">
                            <label for="CANNAHUE_HOJALATERIA">Cannahue Hojalateria</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="GRAFICA_FERNANDEZ" class="ubicacionCheckbox">
                            <label for="GRAFICA_FERNANDEZ">Grafica Fernandez</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="CENTRO_MEDICO_VICTORIANO" class="ubicacionCheckbox">
                            <label for="CENTRO_MEDICO_VICTORIANO">Centro Medico Victoriano</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="CONTROL_DE_PLAGAS" class="ubicacionCheckbox">
                            <label for="CONTROL_DE_PLAGAS">Control de plagas</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="MAIVA_ENVASES" class="ubicacionCheckbox">
                            <label for="MAIVA_ENVASES">Maiva Envases</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="WE_DENT" class="ubicacionCheckbox">
                            <label for="WE_DENT">WE Dent</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="KING_CY_BARBERSHOP" class="ubicacionCheckbox">
                            <label for="KING_CY_BARBERSHOP">King CY Barrbershop</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="MADERAS_EL_CASTOR" class="ubicacionCheckbox">
                            <label for="MADERAS_EL_CASTOR">Maderas el castor</label>
                        </a>
                    </li>
                </ul>
                
                </li>
                <li class="list__item list__item--click">
                <div class="list__button list__button--click">
                    <i class="bi bi-caret-right-fill"></i>
                    <a href="#" class="nav__link">centrados en la tecnologia</a>
                    <i class="bi bi-arrow-down-left list__arrow"></i>
                    
                </div>
                <ul class="list__show">
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="AQUI_ESTA_LA_PAPA" class="ubicacionCheckbox">
                            <label for="AQUI_ESTA_LA_PAPA">Aquí esta la papa</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="FRUTERIA_EL_EDEN" class="ubicacionCheckbox">
                            <label for="FRUTERIA_EL_EDEN">Fruterria el Eden</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="LA_GRAN_FERIA_ZUFRUTA_3_0" class="ubicacionCheckbox">
                            <label for="LA_GRAN_FERIA_ZUFRUTA_3_0"> La gran feria zufruta</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="LAS_PAPAS_DE_MUERMO" class="ubicacionCheckbox">
                            <label for="LAS_PAPAS_DE_MUERMO">Las papas de Muermo</label>
                        </a>
                    </li>
                </ul>
                
                </li>
                <li class="list__item list__item--click">
                <div class="list__button list__button--click">
                    <i class="bi bi-caret-right-fill"></i>
                    <a href="#" class="nav__link">Comida rapida</a>
                    <i class="bi bi-arrow-down-left list__arrow"></i>
                    
                </div>
                <ul class="list__show">
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="AQUI_ESTA_LA_PAPA" class="ubicacionCheckbox">
                            <label for="AQUI_ESTA_LA_PAPA">Aquí esta la papa</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="FRUTERIA_EL_EDEN" class="ubicacionCheckbox">
                            <label for="FRUTERIA_EL_EDEN">Fruterria el Eden</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="LA_GRAN_FERIA_ZUFRUTA_3_0" class="ubicacionCheckbox">
                            <label for="LA_GRAN_FERIA_ZUFRUTA_3_0"> La gran feria zufruta</label>
                        </a>
                    </li>
                    <li class="list__inside">
                        <a href="#" class="nav__link nav__link--inside">
                            <input type="checkbox" id="LAS_PAPAS_DE_MUERMO" class="ubicacionCheckbox">
                            <label for="LAS_PAPAS_DE_MUERMO">Las papas de Muermo</label>
                        </a>
                    </li>
                </ul>
                
                </li>
            </ul>
        </nav>
        <div id="map"></div>
    </div>
    <footer class="footer__style">
        <div class="footer__style --style__div">
            <span>
                <img src="">
                LICEO ANDRÉS BELLO | MAPA 
                
            </span>
        </div>
        <div class="footer__style --copyright">
            <p class="text">
                LICEO ANDRÉS BELLO Programacion 4°D - 2023
            </p>
        </div>
        <ul class="footer__style --redes__sociales">
            <li>
                <a href=""></a>
            </li>
            <li>
                <a href=""></a>
            </li>
        </ul>
    </footer>
</body>

</html>