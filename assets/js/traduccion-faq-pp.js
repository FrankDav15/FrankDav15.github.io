$(document).ready(function(){
    // Función para cambiar el idioma
    function cambiarIdioma(idioma) {
        if (idioma === "es") {
            $("#privacy-header").text('AVISO DE PRIVACIDAD');
            $("#privacy-p-1").text('Eternal Glow Medical Aesthetic Center, en cumplimiento a lo que establece la Ley Federal de protección de datos personales en posesión de los particulares hace del conocimiento que únicamente recaba datos personales de sus clientes y/o lectores, siendo la única responsable de su tratamiento y manifestando que se compromete a respetar la privacidad de los datos en posesión, motivo por el cual informa que:');
            $("#privacy-li-1").text('Su domicilio para oír y recibir notificaciones es el de Valladolid #56, Roma Norte, Cuauhtémoc, Ciudad de México, CP 06700.');
            $("#privacy-li-2").text('Eternal Glow Medical Aesthetic Center, recaba los datos personales relacionados con el nombre, teléfono y correo electrónico únicamente si se solicita información acerca de alguno de nuestros servicios; éstos datos se utilizan exclusivamente para fines de prestación del servicio que brindamos, así como fines publicitarios.');
            $("#privacy-p-2").text('Eternal Glow Medical Aesthetic Center, manifiesta que sus datos no serán entregados a ninguna otra persona física o moral, motivo por el cual sus datos únicamente serán tratados por Eternal Glow Medical Aesthetic Center, sus directivos o empleados.');
            $("#privacy-p-3").text('Los mecanismos que utiliza Eternal Glow Medical Aesthetic Center para recabar los datos personales son:');
            $("#privacy-li-3").text('De manera personal y directa.');
            $("#privacy-li-4").text('A través de nuestro sitio de internet.');
            $("#privacy-li-5").text('A través de nuestras redes sociales.');
            $("#privacy-p-4").text('Las excepciones para la restricción de sus datos personales son:');
            $("#privacy-li-6").text('Exista requerimiento de la autoridad.');
            $("#privacy-li-7").text('Los que consten en fuentes de acceso público.');
            $("#privacy-p-5").text('Solicitamos revisar las políticas de privacidad de los enlaces a sitios de terceros ajenos que aparezcan en nuestro sitio web, ya que Eternal Glow Medical Aesthetic Center no mantiene ninguna relación con los titulares de los mismos.');
            $("#privacy-p-6").text('El presente Aviso de Privacidad podrá ser modificado en cualquier momento y nos comprometemos a publicar las modificaciones de forma inmediata en nuestras oficinas, sitios web o medios impresos.');
            $("#cookies-header").text('POLÍTICA DE COOKIES');
            $("#privacy-p-7").text('¿Qué es una cookie?');
            $("#privacy-p-23").text('Una cookie es un pequeño fichero de datos que un sitio web solicita al navegador que guarde en el ordenador o en el dispositivo móvil del usuario. Gracias a esa cookie, el sitio web puede “recordar” las acciones o preferencias del usuario con el paso del tiempo. La mayoría de los navegadores de internet admiten cookies; pero los usuarios pueden configurarlos para que no admitan determinados tipos de cookies o cookies específicas. Los usuarios también pueden eliminar las cookies en cualquier momento.');
            $("#privacy-p-8").text('¿Por qué usamos cookies?');
            $("#privacy-p-24").text('Utilizamos cookies para saber cómo interactúan los usuarios con el contenido y mejorar su experiencia cuando visitan nuestros sitios web.');
            $("#privacy-p-9").text('¿Qué tipos de cookies utilizamos?');
            $("#privacy-p-25").text('Cookies propias y de terceros.');
            $("#privacy-p-26").text('En nuestro sitio web utilizamos tanto cookies propias como de terceros...');
            $("#privacy-p-10").text('Las cookies propias son cookies enviadas desde el dominio del sitio, utilizadas generalmente para identificar preferencias en cuanto a idioma y ubicación o para ofrecer las funciones básicas del sitio.');
            $("#privacy-p-11").text('Las cookies de terceros pertenecen a otras empresas y son gestionadas por estas. Estas cookies podrían ser necesarias para facilitar determinados formularios.');
            $("#privacy-p-12").text('Cookies de sesión');
            $("#privacy-p-27").text('Se trata de cookies temporales utilizadas para recordar al usuario durante el transcurso de su visita al sitio web. Cuando el usuario cierra el navegador, desaparecen.');
            $("#privacy-p-13").text('Cookies permanentes');
            $("#privacy-p-14").text('Se emplean para recordar las preferencias del usuario en el sitio web y permanecen en el ordenador o dispositivo móvil incluso después de que se haya cerrado el navegador o reiniciado el ordenador. Utilizamos estas cookies para analizar el comportamiento del usuario, con el fin de obtener patrones de visita y poder mejorar las funciones del sitio web. Estas cookies también nos permiten presentar al usuario publicidad personalizada y medir la eficacia de las funciones y la publicidad de nuestro sitio.');
            $("#privacy-p-15").text('Cookies de Analítica');
            $("#privacy-p-28").text('Número de visitas, páginas o secciones visitadas, tiempo de navegación, sitios visitados antes de entrar en esta página, detalles sobre los navegadores usados.');
            $("#privacy-p-16").text('¿Cómo se utilizan las cookies con fines publicitarios?');
            $("#privacy-p-17").text('Las cookies nos ayudan a presentar al usuario anuncios pertinentes de manera más eficaz. Aunque no utilizamos las cookies para crear perfiles web del comportamiento de los usuarios cuando navegan por sitios de terceros, si empleamos datos agregados de terceros para mostrarle una publicidad personalizada de acuerdo con sus intereses. No facilitamos ningún dato personal recopilado a los anunciantes. El usuario puede desactivar la publicidad externa al sitio y la publicidad con información de terceros ajustando la configuración de las cookies. Si desactiva la publicidad, esta no desaparecerá de las páginas que visite, pero los anuncios que vea no estarán personalizados de acuerdo con sus intereses.');
            $("#privacy-p-18").text('¿Cómo se utilizan las cookies de terceros?');
            $("#privacy-p-19").text('Para algunas de las funciones incluidas en nuestros sitios web, recurrimos a terceros proveedores. Por ejemplo, cuando el usuario visita una página en la que se han insertado videos de YouTube o enlaces a estos. Dichos videos o enlaces (y cualquier otro contenido de otros proveedores) podrían incluir cookies de terceros. Por lo tanto, animamos a los usuarios a que consulten las políticas de privacidad de estos en sus sitios web, para saber cómo utilizan las cookies.');
            $("#privacy-p-20").text('¿Cómo se gestionan las cookies?');
            $("#privacy-p-29").text('Dado que las cookies no son estrictamente necesarias para navegar por este sitio web, se pueden bloquear o deshabilitar, total o parcialmente, a través de la configuración de las opciones de su navegador de Internet. Todos los navegadores permiten el cambio en la configuración de las cookies.');
            $("#privacy-p-21").text('Asimismo, tiene la posibilidad de revocar en cualquier momento el consentimiento prestado para la utilización de cookies configurando para ello su navegador.');
            $("#privacy-p-22").text('Para deshabilitar las cookies modificando la configuración de su navegador, puede seguir las instrucciones que especifica cada navegador:');
            $("#privacy-li-8").text('Chrome.');
            $("#privacy-li-9").text('Chrome para Android.');
            $("#privacy-li-10").text('Firefox.');
            $("#privacy-li-11").text('Explorer.');
            $("#privacy-li-12").text('Safari.');
            $("#privacy-li-13").text('Safari para IOS (iPhone y iPad).');
            $("#privacy-li-14").text('Windows 10: Microsoft Edge.');
            $("#privacy-li-15").text('Además, si el usuario no desea que sus datos se recopilen con Google Analytics, puede instalar su complemento de inhabilitación para navegadores.');

            //FAQ
            $("#faq-header").text('Preguntas Frecuentes');
            $("#faq-text").text('Inicio');
            $("#home-text").text('Preguntas Frecuentes');

            $("#question-1").text('¿Qué es la gimnasia pasiva?');
            $("#question-2").text('¿Qué son las Peptonas?');
            $("#question-3").text('¿Qué es el HIFU?');
            $("#question-4").text('¿Qué es la depilación láser?');
            $("#question-5").text('¿Qué es el láser de CO2');

            $('#question-p-1').text('La gimnasia pasiva es una forma de ejercicio pasivo que implica el uso de dispositivos eléctricos para estimular los músculos y producir contracciones musculares. Estas contracciones imitan los movimientos que se realizan durante el ejercicio físico activo, sin que la persona necesite moverse o realizar esfuerzos musculares de forma voluntaria. Por este motivo, también se la conoce como electroestimulación, servicio que ponemos a su disposición en nuestro centro médico de Moaña.');
            $('#question-p-2').text('Utilidad y funcionamiento');
            $('#question-p-3').text('Durante una sesión de gimnasia pasiva, utilizamos electrodos que se colocan estratégicamente en áreas específicas del cuerpo, dirigidos a grupos musculares particulares. Estos electrodos emiten pulsos eléctricos suaves que generan contracciones musculares controladas y coordinadas, sin causar dolor ni molestias. Dicha estimulación contribuye a tonificar, fortalecer y reafirmar los músculos, mejorando la circulación sanguínea y el drenaje linfático.');
            $('#question-p-4').text('Tonificación muscular sin esfuerzo');
            $('#question-p-130').text('La gimnasia pasiva es ideal para personas con limitaciones físicas o aquellos que buscan tonificar sus músculos sin realizar ejercicio físico intenso. Es especialmente útil para rehabilitación muscular después de lesiones o cirugías.');
            $('#question-p-5').text('Mejora de la circulación y la elasticidad');
            $('#question-p-6').text('La electroestimulación promueve una mejor circulación sanguínea, lo que ayuda a reducir la hinchazón, mejorar la elasticidad de la piel y disminuir la retención de líquidos.');
            $('#question-p-7').text('Alivio del dolor y reducción de la fatiga muscular');
            $('#question-p-8').text('Este tipo de gimnasia contribuye al alivio de los dolores musculares, reduce la rigidez y disminuye la fatiga en los músculos, proporcionando una sensación de relajación y bienestar.');
            $('#question-p-9').text('Complemento en la pérdida de peso y tratamientos estéticos');
            $('#question-p-10').text('Esta técnica puede ser un complemento útil en programas de pérdida de peso, ya que ayuda a mantener la actividad muscular incluso en reposo. También se usa en tratamientos estéticos para mejorar la apariencia de la piel y reducir la celulitis');
            $('#question-p-11').text('Son proteínas naturales que llegan al ADN, actúan como nutriente (celular y orgánico), por lo que no ocasiona riesgos, ni intolerancias o efectos secundarios. Un método que hay que reforzar con entrenamientos en el gimnasio.');
            $('#question-p-12').text('5 beneficios de las peptonas para los glúteos');
            $('#question-p-13').text('Tonifica y reafirma la piel sin dolor.');
            $('#question-p-14').text('Levanta y aumenta el tamaño de los glúteos o piernas.');
            $('#question-p-15').text('Fortalece y reafirma');
            $('#question-p-16').text('Hidrata y nutre');
            $('#question-p-17').text('Reduce celulitis y flacidez');
            $('#question-p-18').text('¿Cómo se realiza el procedimiento?');
            $('#question-p-19').text('El área se marcará mientras el paciente está de pie. Esto nos permite ver todos los contornos y planificar dónde se colocará el producto para lograr el aspecto deseado.');
            $('#question-p-20').text('Luego, se coloca al paciente boca abajo en la camilla y se procede a realizar la exfoliación con el objetivo de higienizar la zona a tratar.');
            $('#question-p-21').text('Posteriormente se realiza la aplicación de las ampollas con peptonas y una pequeña dosis de anestésico local para mayor comodidad.');
            $('#question-p-22').text('Una vez colocada toda la dosis de Peptona a en la zona de tratamiento, masajeamos la zona durante unos minutos con el fin de ayudar a que el líquido se esparza de manera uniforme en toda la región glútea.');
            $('#question-p-23').text('Todo el proceso toma aproximadamente 45-60 minutos y no tiene tiempo de inactividad.');
            $('#question-p-24').text('¿Es doloroso el procedimiento con peptonas?');
            $('#question-p-25').text('Habrá una leve molestia durante el procedimiento similar a cuando se aplica un medicamento inyectable. La anestesia local utilizada ayudará con el alivio de las molestias y / o malestar durante las sesiones');
            $('#question-p-26').text('Cuántas sesiones de peptonas necesito?');
            $('#question-p-27').text('Para un buen resultado se recomiendan de 5 a 10 sesiones ya que esto ayudará levantar y definir la forma de los glúteos, pero todo depende de la evaluación previa con la especialista.');
            $('#question-p-28').text('Si te vas a hacer el tratamiento de peptona en los glúteos te recomendamos que te hagas mínimo 3 sesiones, ya que en una sesión se nota un ligero cambio pero no un resultado perceptible a la vista');
            $('#question-p-29').text('HIFU es un tratamiento no invasivo que consiste en aplicar un haz de ultrasonido de alta frecuencia en la piel de la zona afectada para remodelar el tejido. Se realiza mediante ablación térmica. La ablación térmica, explicado brevemente, es un proceso médico en el que se utiliza calor para extirpar un determinado tejido.\nRealizando este tratamiento solo quedan afectados los tejidos que se desea, los colindantes no sufren ningún daño.');
            $('#question-p-30').text('BENEFICIOS HIFU');
            $('#question-p-31').text('Es apto para todo tipo de pieles, sin importar el tono y sin causar lesiones en las pieles blancas o muy morenas.');
            $('#question-p-32').text('Puede aplicarse en cualquier estación, incluso en verano. Esto se debe a que este tratamiento no es fotosensibilizante.');
            $('#question-p-33').text('Mejora la piel, tanto su elasticidad como su tersura');
            $('#question-p-34').text('Sus resultados son claros y rápidos, parecidos a los que se pueden obtener tras procedimientos quirúrgicos');
            $('#question-p-35').text('Se necesitan muy pocas sesiones para notar sus efectos, unas 3 más o menos. Aunque este número de sesiones puede variar en función de la zona a tratar y de la grasa localizada del paciente.');
            $('#question-p-36').text('Destruye los adipocitos de forma definitiva, aunque eso no significa que no puedan salir unos nuevos.');
            $('#question-p-37').text('Tal y como hemos mencionado, es un tratamiento no invasivo, por lo que cualquier paciente puede incorporarse a su rutina de inmediato.');
            $('#question-p-38').text('TRATAMIENTO CON HIFU');
            $('#question-p-131').text('En tan solo una sesión es posible ver resultados, aunque lo más habitual es verlos pasados 6 meses. La duración de cada sesión puede oscilar entre los 30 minutos y las 2 horas, en función de la zona tratada y de la cantidad de grasa localizada o flacidez de la persona.');
            $('#question-p-39').text('HIFU CONTRAINDICACIONES');
            $('#question-p-40').text('Los tratamientos HIFU normalmente no tienen contraindicaciones. Sin embargo, en algunos casos pueden darse los siguientes:');
            $('#question-p-41').text('Enrojecimiento de la piel de la zona tratada.');
            $('#question-p-42').text('Ligeras inflamaciones en el área tratada.');
            $('#question-p-43').text('Sensación de hormigueo.');
            $('#question-p-44').text('¿QUÉ ES LA ESTIMULACIÓN DEL COLÁGENO CON EL HIFU?');
            $('#question-p-45').text('El colágeno es una de las proteínas que nuestro cuerpo produce de forma natural. Sin embargo, el paso de los años y algunos malos hábitos como fumar o llevar una mala alimentación pueden reducir considerablemente su producción.');
            $('#question-p-46').text('El colágeno es el encargado de proporcionarle elasticidad a la piel. Cuando dejamos de producir colágeno nuestra piel no solo se ve menos elástica, también mucho menos joven. Aquí es donde entra el HIFU, un tratamiento que no solo está pensado para la reducción de la grasa localizada, también para la estimulación de la producción del colágeno.');
            $('#question-p-47').text('Y es que, las ondas ultrasónicas de HIFU provocan el aumento de la temperatura corporal, dando lugar a la reestructuración de las moléculas del colágeno y también de la elastina');
            $('#question-p-48').text('HIFU Y ESTIRAMIENTO FACIAL');
            $('#question-p-49').text('HIFU no solo es un tratamiento corporal. También puedes encontrar en los centros médico estéticos el HIFU facial, un tratamiento indicado para las personas que desean conseguir que su piel se vea mucho más joven y tersa. Si has perdido elasticidad en el rostro, si tienes flacidez o arrugas en el cuello y en el escote, las cejas caídas y buscas un tratamiento que te realice un  stiramiento facial en general sin la necesidad de pasar por un quirófano HIFU facial es para ti.');
            $('#question-p-50').text('El estiramiento facial en parte es consecuencia de la estimulación del colágeno que provocan las ondas ultrasónicas de HIFU. El estiramiento facial con HIFU consigue disimular los signos de la edad y tensar considerablemente la piel del rostro en muy pocas sesiones.');
            $('#question-p-51').text('Hoy en día, el tratamiento HIFU es el único tratamiento médico estético en el mundo que ha sido aprobado por la FDA (Food and Drug Administration) para lifting facial de cejas, región submentoniana y para el cuello.');
            $('#question-p-52').text('La depilación láser es un procedimiento médico que utiliza un rayo concentrado de luz(láser) para eliminar el vello no deseado.');
            $('#question-p-53').text('Durante la depilación láser, un láser emite una luz que es absorbida por el pigmento (melanina) del vello. La energía lumínica se convierte en calor, que daña los sacos en forma de tubo dentro de la piel (folículos pilosos) que producen vellos. Este daño inhibe o retrasa el crecimiento futuro del vello.');
            $('#question-p-54').text('Se requieren múltiples tratamientos de depilación láser para la depilación inicial, y también se pueden necesitar tratamientos de mantenimiento. La depilación láser es más eficaz para las personas que tienen la piel clara y el cabello oscuro, pero puede tener buenos resultados en todos los tipos de piel.');
            $('#question-p-55').text('¿Por qué se realiza?');
            $('#question-p-56').text('La depilación láser se utiliza para reducir el vello no deseado. Los lugares frecuentes donde se realiza el tratamiento son piernas, axilas, labio superior, mentón y línea del bikini. Sin embargo, es posible tratar el vello no deseado en casi cualquier zona, excepto los párpados o la zona de alrededor.');
            $('#question-p-57').text('El color del vello y el tipo de piel influyen en el éxito de la depilación láser. El principio básico indica que el pigmento del vello, pero no el pigmento de la piel, debe absorber la luz. El láser debe dañar solo el folículo piloso y evitar dañar la piel. Por lo tanto, con un contraste entre el color del vello y el color de la piel (vello oscuro y piel clara) se obtienen mejores resultados.');
            $('#question-p-58').text('Riesgos');
            $('#question-p-59').text('Los riesgos de efectos secundarios varían según el tipo de piel, el color del vello, el plan de tratamiento y el cumplimiento con los cuidados anteriores y posteriores al tratamiento. Entre los efectos secundarios más comunes de la depilación láser se incluyen:');
            $('#question-p-60').text('Irritación de la piel. Es posible que tengas, de manera temporal, malestar, enrojecimiento e hinchazón después de la depilación láser.Cualquier signo y síntoma suele desaparecer en varias horas.');
            $('#question-p-61').text('Cambios en la pigmentación. La depilación láser puede oscurecer o aclarar la piel afectada. Estos cambios pueden ser temporales o permanentes. El aclarado de la piel afecta principalmente a quienes no evitan la exposición al sol antes o después del tratamiento y a quienes tienen la piel más oscura.');
            $('#question-p-62').text('¿Cómo prepararse?');
            $('#question-p-63').text('Antes de la depilación con láser, programa una consulta con el médico para determinar si esta es una opción de tratamiento adecuada para ti. Tu médico podría hacer lo siguiente:');
            $('#question-p-64').text('Revisar tus antecedentes médicos, incluidos los medicamentos que usas, antecedentes de trastornos de la piel o formación de cicatrices y procedimientos anteriores de depilación.');
            $('#question-p-65').text('Hablar sobre los riesgos, beneficios y expectativas, incluso lo que la depilación con láser puede hacer o no por ti.');
            $('#question-p-66').text('Tomar fotografías para utilizar en evaluaciones donde se compara el antes y el después, y revisiones a largo plazo.');
            $('#question-p-67').text('El médico también ofrecerá instrucciones específicas para prepararte para la depilación con láser. Entre estos se podrían incluir los siguientes:');
            $('#question-p-68').text('No exponerte al sol. Sigue los consejos del médico para evitar la exposición al sol antes y después del tratamiento. Siempre que salgas, aplica un protector solar de amplio espectro, SPF30.');
            $('#question-p-69').text('Aclarar tu piel. Evita cremas de bronceado sin sol que oscurezcan la piel. Es posible que el médico también te recete una crema decolorante si tienes un bronceado reciente o la piel más oscura.');
            $('#question-p-70').text('Evitar otros métodos de depilación. La depilación mediante electrólisis, con pinzas de depilar y ceras puede alterar los folículos pilosos y debe evitarse al menos cuatro semanas antes del tratamiento.');
            $('#question-p-71').text('Evitar los medicamentos anticoagulantes. Pregúntale a tu médico qué medicamentos evitar antes del procedimiento, como las aspirinas o los medicamentos antiinflamatorios.');
            $('#question-p-72').text('Afeitar el área de tratamiento. Se recomienda recortarse o afeitarse el día antes del tratamiento con dispositivo láser. De esa manera, se elimina el vello por encima de la piel que puede ocasionar daños en dicha superficie debido al vello quemado, pero preserva el tallo del vello debajo de la superficie');
            $('#question-p-73').text('Lo que puedes esperar');
            $('#question-p-74').text('Por lo general, la depilación con láser requiere de cuatro a seis tratamientos. El intervalo entre los tratamientos variará según el lugar. En las áreas donde el vello crece rápidamente, como el labio superior, el tratamiento podría repetirse dentro de cuatro a ocho semanas. En las áreas donde el vello crece lentamente, como en la espalda, el tratamiento podría realizarse cada 12 a 16 semanas.');
            $('#question-p-75').text('En cada tratamiento, usarás gafas especiales para proteger tus ojos del rayo láser. Si es necesario, un asistente podría afeitar la zona nuevamente. El médico puede aplicar anestesia tópica sobre tu piel para reducir cualquier molestia durante el tratamiento.');
            $('#question-p-76').text('Durante el procedimiento');
            $('#question-p-132').text('El médico presionará un instrumento láser de mano sobre la piel. Cuando el médico active el láser, el rayo láser pasará a través de la piel hacia los folículos pilosos. El calor intenso del rayo láser daña los folículos pilosos, lo que inhibe el crecimiento del vello. Puedes sentir una molestia, como un pinchazo tibio, y es probable que sientas una sensación de frío provocada por el dispositivo de enfriamiento o el gel.');
            $('#question-p-77').text('Quizás notes enrojecimiento e hinchazón en las primeras horas después de la depilación láser');
            $('#question-p-78').text('Para reducir las molestias, puedes aplicarte hielo en la zona tratada. Si presentas una reacción alérgica en la piel inmediatamente después de la depilación láser, el médico podría aplicarte una crema con esteroides en la zona afectada.');
            $('#question-p-79').text('Después de la depilación láser y entre los tratamientos programados, evita la exposición al sol y no uses camas solares durante seis semanas, o según te lo indique el médico. Usa un protector solar de amplio espectro SPF30 todos los días.');
            $('#question-p-80').text('Resultados');
            $('#question-p-133').text('Los vellos no se caen de inmediato, pero lo harán durante un plazo de días a semanas. Esto puede parecer un crecimiento continuo del vello. Los tratamientos repetidos suelen ser necesarios porque el crecimiento y la pérdida del vello ocurren naturalmente en un ciclo y el tratamiento con láser funciona mejor con los folículos pilosos en la etapa de nuevo crecimiento.');
            $('#question-p-81').text('ZONAS A TRATAR');
            $('#question-p-82').text('Línea alba: Del ombligo al pubis');
            $('#question-p-83').text('Bozo: Piel por encima del labio superior “bigote”');
            $('#question-p-84').text('Mentón');
            $('#question-p-85').text('Nuca');
            $('#question-p-86').text('Línea interglútea');
            $('#question-p-87').text('Bikini');
            $('#question-p-88').text('Axilas');
            $('#question-p-89').text('Pecho');
            $('#question-p-90').text('Abdomen');
            $('#question-p-91').text('Cara');
            $('#question-p-92').text('Barba');
            $('#question-p-93').text('Hombros');
            $('#question-p-94').text('Piernas');
            $('#question-p-95').text('Espalda');
            $('#question-p-96').text('Brazos');
            $('#question-p-97').text('Torso');
            $('#question-p-98').text('El láser CO2 fraccionado es un dispositivo que emite pequeños impulsos de luz que penetran en la piel.');
            $('#question-p-99').text('Esto hace que se creen pequeñas heridas microscópicas (¡totalmente controladas y dirigidas!) y que la piel reaccione con una rápida cicatrización y una alta producción de colágeno. Tras el tratamiento, la piel queda totalmente ‘renovada’ y las manchas, las arrugas, las marcas de acné, las cicatrices, etc. se suavizan de forma muy significativa o incluso desaparecen.');
            $('#question-p-100').text('En el láser CO2 fraccionado, el antes y después es tan notorio justamente por el efecto de ‘piel nueva’ que conseguimos y que es mucho más visible que con otros tratamientos como los peelings.');
            $('#question-p-101').text('Láser de CO2 fraccionado es una técnica muy utilizada en medicina estética para la disminución del envejecimiento de la piel así como las diferentes lesiones cutáneas. Con solo un tratamiento a corto-medio plazo, busca la eliminación de cualquier tipo de marca en la piel. Mediante esta técnica, vaporiza los tejidos con gran precisión, activando los fibroblastos y favoreciendo la producción de colágeno. De esta forma, se facilita un proceso de cicatrización más eficiente, logrando el reemplazo de la piel dañada por una piel mucho más sana, fresca y radiante.');
            $('#question-p-102').text('¿Para quienes está indicado este tratamiento?');
            $('#question-p-103').text('El láser de CO2 está indicado principalmente para pacientes cuya piel ha sido afectada significativamente por el avance del tiempo u algún otro factor externo. En general, es un tratamiento indicado para todas aquellas personas que deseen mejorar la calidad de la piel:');
            $('#question-p-104').text('Pieles foto envejecidas, con arrugas finas, manchas, poro dilatado, piel engrosada y con pérdida de luminosidad. También es factible realizar el tratamiento en manos y escote.');
            $('#question-p-105').text('Pieles con cicatrices de acné, ideal para mejorar y reducir en profundidad las cicatrices, así como la textura de la piel.');
            $('#question-p-106').text('Párpados con flacidez y arrugas finas, mejora la laxitud de la piel sin recurrir a la cirugía.');
            $('#question-p-107').text('Estrías, logrando reducirlas de forma significativa tras varias sesiones.');
            $('#question-p-108').text('Cicatrices queloides o hipertróficas');
            $('#question-p-109').text('REJUVENECIMIENTO FACIAL');
            $('#question-p-110').text('También conocido como CO2 láser resurfacing, eliminamos manchas, arrugas superficiales, flacidez y los demás signos de envejecimiento. El tono mejora, se reduce la flacidez, y se suavizan las arrugas.');
            $('#question-p-111').text('MANCHAS SOLARES');
            $('#question-p-112').text('El láser CO2 para manchas es altamente efectivo y consigue un tono de la piel mucho más uniforme. Este tratamiento es especialmente interesante realizarlo después del verano, cuando pueden puede haber nuevas manchas solares, hiperpigmentaciones, o bien estas pueden haberse oscurecido.');
            $('#question-p-113').text('CICATRICES DE ACNÉ');
            $('#question-p-114').text('Con el láser CO2 para acné en dosis altas conseguimos uniformar las cicatrices y mejorar la textura y las irregularidades en la piel.');
            $('#question-p-115').text('BLEFAROPLASTÍA NO QUIRÚRGICA');
            $('#question-p-116').text('Con el láser se consigue contraer el exceso de piel que se encuentra en la zona de los párpados superiores y/o las bolsas de los ojos inferiores.');
            $('#question-p-117').text('¿Cuántas sesiones son necesarias?');
            $('#question-p-118').text('El número de sesiones dependerá de la severidad de las cicatrices, así como de la intensidad del tratamiento, pudiendo ser necesarias de 1 a 3 sesiones en la mayoría de los casos. No obstante, cuanto más profundas sean las cicatrices es de esperar un número mayor de sesiones de tratamiento.');
            $('#question-p-119').text('Mientras los tratamientos de resurfacing tradicionales exigen varias sesiones y reposo de hasta un mes, con esta tecnología los resultados son visibles desde la primera sesión, con un número mucho más reducido de sesiones y un breve tiempo de recuperación.');
            $('#question-p-120').text('¿Qué resultados se pueden obtener?');
            $('#question-p-121').text('Generalmente suele ser un tratamiento muy satisfactorio que mejora mucho la autoestima y la consecuente calidad de vida de los pacientes. Los efectos secundarios son muy poco probables, si se siguen las recomendaciones, y en todo caso, si los hay, son poco importantes.');
            $('#question-p-122').text('La piel nueva, sana y luminosa, reemplaza al tejido dañado y el proceso continúa durante los seis meses posteriores al tratamiento, pues la formación de colágeno conlleva la remodelación de la dermis y, por consiguiente, la mejora de la calidad de la superficie cutánea.');
            $('#question-p-123').text('¿CÓMO QUEDA EL ROSTRO DESPUÉS DEL LÁSER CO2?');
            $('#question-p-124').text('En el láser Co2, el antes y después no es inmediato. Hay un periodo de recuperación y hay que esperar a que toda la piel se ‘renueve’. Esto suele tener lugar en un periodo de entre 6-8 días.');
            $('#question-p-125').text('Así pues, el rostro después del láser CO2 suele estar enrojecido e hinchado. La sensación es parecida a la de una quemadura solar');
            $('#question-p-126').text('Al segundo día, empiezan a aparecer costras (totalmente esperables, ya que son un señal de que la piel se está empezando a descamar).');
            $('#question-p-127').text('Estas costras se irán formando a lo largo de 5-10 días en función de la potencia empleada en el tratamiento y la capacidad regenerativa de cada tipo de piel.');
            $('#question-p-128').text('Por lo general, en el láser fraccionado CO2, el antes y después se empieza a apreciar a los 4-5 días y la piel sigue mejorando hasta que se renueva completamente.');
            $('#question-p-129').text('Es en este momento cuando la mayoría de las personas se siente cómoda para retomar su vida normal. También se puede utilizar maquillaje si fuera necesario si trabajas de cara al público.');


        } else if (idioma === "en") {
            
        }
    }

    //Por default al cargar es español.
    cambiarIdioma("es");

    // Al hacer clic en el botón de Español
    $("#btn-es").click(function(){
        cambiarIdioma("es");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en").click(function(){
        cambiarIdioma("en");
    });

     // Al hacer clic en el botón de Español
    $("#btn-es-mov").click(function(){
        cambiarIdioma("es");
    });

    // Al hacer clic en el botón de Inglés
    $("#btn-en-mov").click(function(){
        cambiarIdioma("en");
    });
});