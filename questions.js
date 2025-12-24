const allTests = {
java: [
    {
        question: "Санды нөлге бөлгенде (мысалы, int a = 5 / 0;) қандай ерекше жағдай туындайды?",
        options: [
            "ArithmeticException",
            "NullPointerException",
            "NumberFormatException",
            "IndexOutOfBoundsException",
            "IllegalArgumentException"
        ],
        correct: 0
    },
    {
        question: "Массивтің шегінен тыс индекске жүгінгенде (мысалы, 5 элементі бар массивтің 10-шы элементін сұрау) қандай қате шығады?",
        options: [
            "ArrayIndexOutOfBoundsException",
            "ArrayStoreException",
            "ClassCastException",
            "NegativeArraySizeException",
            "StringIndexOutOfBoundsException"
        ],
        correct: 0
    },
    {
        question: "null мәніне ие сілтеме арқылы әдісті шақырғанда немесе өріске жүгінгенде не болады?",
        options: [
            "NullPointerException",
            "IllegalStateException",
            "MissingResourceException",
            "UnsupportedOperationException",
            "ClassNotFoundException"
        ],
        correct: 0
    },
    {
        question: "Мәтіндік жолды (String) сандық форматқа айналдыру мүмкін болмағанда (мысалы, \"hello\" сөзін санға айналдыру) қандай қате шығады?",
        options: [
            "NumberFormatException",
            "ClassCastException",
            "IllegalArgumentException",
            "ArithmeticException",
            "InputMismatchException"
        ],
        correct: 0
    },
    {
        question: "Объектіні үйлесімсіз типке келтіруге (casting) тырысқанда қандай ерекшелік туындайды?",
        options: [
            "ClassCastException",
            "ArrayStoreException",
            "SecurityException",
            "IllegalStateException",
            "InstantiationException"
        ],
        correct: 0
    },
    {
        question: "Коллекцияны итератор арқылы аралап жүргенде, оны дұрыс емес жолмен өзгертсе (мысалы, тікелей элемент өшірсе) қандай қате шығады?",
        options: [
            "ConcurrentModificationException",
            "IllegalThreadStateException",
            "UnsupportedOperationException",
            "IndexOutOfBoundsException",
            "NoSuchElementException"
        ],
        correct: 0
    },
    {
        question: "Массив құру кезінде оның өлшемін теріс санмен көрсетсе (мысалы, new int[-5]) не болады?",
        options: [
            "NegativeArraySizeException",
            "ArithmeticException",
            "ArrayStoreException",
            "NullPointerException",
            "IllegalArgumentException"
        ],
        correct: 0
    },
    {
        question: "Массивке үйлесімсіз типтегі объектіні (мысалы, Integer массивіне String) сақтауға тырысқанда қандай қате шығады?",
        options: [
            "ArrayStoreException",
            "ClassCastException",
            "IllegalArgumentException",
            "IndexOutOfBoundsException",
            "SecurityException"
        ],
        correct: 0
    },
    {
        question: "Жолдың (String) шегінен тыс индекске жүгінгенде қандай ерекшелік лақтырылады?",
        options: [
            "StringIndexOutOfBoundsException",
            "ArrayIndexOutOfBoundsException",
            "NullPointerException",
            "NegativeArraySizeException",
            "ClassCastException"
        ],
        correct: 0
    },
    {
        question: "Методқа берілген аргумент дұрыс болмаған жағдайда (жалпы мағынада) қандай ерекшелік қолданылады?",
        options: [
            "IllegalArgumentException",
            "IllegalStateException",
            "IllegalThreadStateException",
            "UnsupportedOperationException",
            "SecurityException"
        ],
        correct: 0
    },
    {
        question: "Қолдау көрсетілмейтін операция орындалғанда қандай ерекшелік туындайды?",
        options: [
            "UnsupportedOperationException",
            "IllegalMonitorStateException",
            "MissingResourceException",
            "NoSuchMethodException",
            "ClassNotFoundException"
        ],
        correct: 0
    },
    {
        question: "Ағым (Thread) күйі орындалатын операцияға сәйкес келмегенде қандай қате шығады?",
        options: [
            "IllegalThreadStateException",
            "InterruptedException",
            "RuntimeException",
            "SecurityException",
            "Error"
        ],
        correct: 0
    },
    {
        question: "Ресурс файлы немесе ондағы кілт табылмағанда қандай ерекшелік шығады?",
        options: [
            "MissingResourceException",
            "FileNotFoundException",
            "IOException",
            "EOFException",
            "NoSuchElementException"
        ],
        correct: 0
    },
    {
        question: "Орта немесе қосымша дұрыс емес күйде (state) болғанда қандай қате шығады?",
        options: [
            "IllegalStateException",
            "IllegalArgumentException",
            "SecurityException",
            "UnknownError",
            "ExceptionInInitializerError"
        ],
        correct: 0
    },
    {
        question: "Enum ішінен жоқ константаны іздегенде немесе қолданғанда қандай қате шығуы мүмкін?",
        options: [
            "IllegalArgumentException",
            "EnumConstantNotPresentException",
            "ClassNotFoundException",
            "TypeNotPresentException",
            "NoSuchFieldException"
        ],
        correct: 0
    },
    {
        question: "Java-да қателер мен ерекше жағдайлардың иерархиясының ең жоғарғы класы қандай?",
        options: [
            "Throwable",
            "Exception",
            "RuntimeException",
            "Error",
            "Object"
        ],
        correct: 0
    },
    {
        question: "Error класы қандай жағдайларды сипаттайды?",
        options: [
            "JVM жұмысындағы түзетілмейтін күрделі қателер (мысалы, StackOverflow)",
            "Бағдарлама жөндей алатын қателер",
            "Файл табылмаған жағдайлар",
            "Логикалық қателер",
            "Пайдаланушының қате енгізуі"
        ],
        correct: 0
    },
    {
        question: "Компилятор тексермейтін (Unchecked) ерекше жағдайлар қай кластан тарайды?",
        options: [
            "RuntimeException",
            "Exception",
            "IOException",
            "ClassNotFoundException",
            "Throwable"
        ],
        correct: 0
    },
    {
        question: "Төмендегілердің қайсысы тексерілетін (Checked) ерекше жағдай?",
        options: [
            "IOException",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "ArithmeticException",
            "ClassCastException"
        ],
        correct: 0
    },
    {
        question: "try блогында ерекше жағдай туындаса, басқару қайда өтеді?",
        options: [
            "Сәйкес catch блогына",
            "finally блогына, сосын catch блогына",
            "Бағдарлама бірден тоқтайды",
            "Келесі try блогына",
            "main әдісіне"
        ],
        correct: 0
    },
    {
        question: "Бірнеше catch блогы болса, олардың орналасу тәртібі қандай болуы керек?",
        options: [
            "Нақты кластар (subclasses) жоғарыда, жалпы кластар (superclasses) төменде",
            "Кез келген ретпен",
            "Жалпы кластар (Exception) жоғарыда, нақты кластар төменде",
            "Тек бір catch болуы керек",
            "Әліпби бойынша"
        ],
        correct: 0
    },
    {
        question: "Java 7-де енгізілген multi-catch блогында ерекшеліктер қандай белгімен ажыратылады?",
        options: [
            "| (тік сызық)",
            ", (үтір)",
            "; (нүктелі үтір)",
            "& (амперсанд)",
            "|| (қос тік сызық)"
        ],
        correct: 0
    },
    {
        question: "throws кілттік сөзі қай жерде жазылады?",
        options: [
            "Методтың сигнатурасында (тақырыбында)",
            "Методтың ішінде",
            "try блогының ішінде",
            "catch блогында",
            "class атының алдында"
        ],
        correct: 0
    },
    {
        question: "Ерекше жағдайды жасанды түрде шақыру (лақтыру) үшін қай оператор қолданылады?",
        options: [
            "throw",
            "throws",
            "try",
            "catch",
            "new"
        ],
        correct: 0
    },
    {
        question: "Өз ерекше жағдай класын (Custom Exception) құру үшін қай кластан мұра алу ұсынылады?",
        options: [
            "Exception",
            "Throwable",
            "Error",
            "RuntimeException",
            "Object"
        ],
        correct: 0
    },
    {
        question: "ArithmeticException қай кезде пайда болады?",
        options: [
            "Санды нөлге бөлгенде",
            "Массив шегінен шыққанда",
            "Объект null болғанда",
            "Файл табылмағанда",
            "Жад толып кеткенде"
        ],
        correct: 0
    },
    {
        question: "Статикалық инициализация блогында қате шықса, қандай қате лақтырылады?",
        options: [
            "ExceptionInInitializerError",
            "RuntimeException",
            "NullPointerException",
            "StackOverflowError",
            "ClassNotFoundException"
        ],
        correct: 0
    },
    {
        question: "try-with-resources қолдану үшін ресурс қай интерфейсті жүзеге асыруы керек?",
        options: [
            "AutoCloseable",
            "Serializable",
            "Cloneable",
            "Runnable",
            "Readable"
        ],
        correct: 0
    },
    {
        question: "assert операторы не үшін қолданылады?",
        options: [
            "Логикалық шарттарды тексеру және отладка (debugging) үшін",
            "Қателерді өңдеу үшін",
            "Бағдарламаны тоқтату үшін",
            "Файлдарды оқу үшін",
            "Объект құру үшін"
        ],
        correct: 0
    },
    {
        question: "Егер ата-аналық кластың әдісі ешқандай ерекшелік жарияламаса, мұрагер кластың (override) әдісі қандай ерекшелік жариялай алады?",
        options: [
            "Тек тексерілмейтін (unchecked) ерекшеліктерді",
            "Кез келген",
            "Тек Exception класын",
            "Тек IOException",
            "Ешқандай ерекшелік жариялай алмайды"
        ],
        correct: 0
    },
    {
        question: "Байттық ағындарды оқуға арналған негізгі абстрактілі класс?",
        options: [
            "InputStream",
            "Reader",
            "OutputStream",
            "Writer",
            "Buffer"
        ],
        correct: 0
    },
    {
        question: "Символдық (мәтіндік) мәліметтерді жазуға арналған негізгі класс?",
        options: [
            "Writer",
            "OutputStream",
            "InputStream",
            "Reader",
            "PrintStream"
        ],
        correct: 0
    },
    {
        question: "InputStream класының read() әдісі ағынның соңына жеткенде не қайтарады?",
        options: [
            "-1",
            "0",
            "null",
            "EOF",
            "False"
        ],
        correct: 0
    },
    {
        question: "Файлдан байттарды оқу үшін қай класс қолданылады?",
        options: [
            "FileInputStream",
            "FileReader",
            "BufferReader",
            "ObjectInputStream",
            "Scanner"
        ],
        correct: 0
    },
    {
        question: "BufferedInputStream класының негізгі артықшылығы неде?",
        options: [
            "Буферді қолдану арқылы оқу жылдамдығын арттырады",
            "Тек мәтінді оқиды",
            "Файлды өшіре алады",
            "Объектілерді сериализациялайды",
            "Желімен жұмыс істейді"
        ],
        correct: 0
    },
    {
        question: "System.out объектісі қай кластың данасы (instance)?",
        options: [
            "PrintStream",
            "PrintWriter",
            "FileOutputStream",
            "BufferedWriter",
            "Writer"
        ],
        correct: 0
    },
    {
        question: "Символдық ағынды жол-жолымен (line by line) оқуға мүмкіндік беретін класс?",
        options: [
            "BufferedReader",
            "FileReader",
            "InputStreamReader",
            "StringReader",
            "Scanner"
        ],
        correct: 0
    },
    {
        question: "Объектіні \"сериализациялау\" (тізбектеу) дегеніміз не?",
        options: [
            "Объектіні байттар тізбегіне айналдыру",
            "Объектіні консольге шығару",
            "Объект көшірмесін жасау",
            "Объект өрістерін null-ге теңестіру",
            "Класс кодын компиляциялау"
        ],
        correct: 0
    },
    {
        question: "Объектіні сериализациялау кезінде қай интерфейс міндетті түрде жүзеге асырылуы керек?",
        options: [
            "Serializable",
            "Cloneable",
            "Remote",
            "Readable",
            "Appendable"
        ],
        correct: 0
    },
    {
        question: "Сериализация кезінде сақталмайтын өрісті көрсету үшін қандай кілт сөз қолданылады?",
        options: [
            "transient",
            "static",
            "final",
            "volatile",
            "abstract"
        ],
        correct: 0
    },
    {
        question: "serialVersionUID өрісінің мақсаты не?",
        options: [
            "Класс нұсқасын (version) бақылау және десериализация дұрыстығын тексеру",
            "Объектінің санын санау",
            "Парольді сақтау",
            "Файл атын сақтау",
            "Жад көлемін анықтау"
        ],
        correct: 0
    },
    {
        question: "Scanner класы қай пакетте орналасқан?",
        options: [
            "java.util",
            "java.io",
            "java.lang",
            "java.net",
            "java.nio"
        ],
        correct: 0
    },
    {
        question: "Scanner арқылы бүтін санды оқу әдісі?",
        options: [
            "nextInt()",
            "next()",
            "nextLine()",
            "readInt()",
            "getInt()"
        ],
        correct: 0
    },
    {
        question: "System.in ағыны әдетте немен байланысқан?",
        options: [
            "Консольмен (пернетақта)",
            "Файлмен",
            "Принтермен",
            "Желімен",
            "Мәліметтер қорымен"
        ],
        correct: 0
    },
    {
        question: "File класының exists() әдісі не істейді?",
        options: [
            "Файлдың немесе каталогтың бар-жоғын тексереді",
            "Файлды өшіреді",
            "Жаңа файл жасайды",
            "Файл атын өзгертеді",
            "Файл өлшемін қайтарады"
        ],
        correct: 0
    },
    {
        question: "Java 7-де файлдармен жұмыс істеу үшін File класының орнына ұсынылған жаңа интерфейс?",
        options: [
            "Path",
            "FileSystem",
            "Paths",
            "Directory",
            "Link"
        ],
        correct: 0
    },
    {
        question: "Files.readAllLines(path) әдісі не қайтарады?",
        options: [
            "List<String> (жолдар тізімі)",
            "String",
            "byte[]",
            "Stream",
            "int"
        ],
        correct: 0
    },
    {
        question: "flush() әдісі не үшін қажет?",
        options: [
            "Буфердегі мәліметтерді күштеп шығару (жазу) үшін",
            "Ағынды жабу үшін",
            "Мәліметтерді өшіру үшін",
            "Оқуды тоқтату үшін",
            "Файлды көшіру үшін"
        ],
        correct: 0
    },
    {
        question: "InputStreamReader класының қызметі қандай?",
        options: [
            "Байттық ағынды символдық ағынға түрлендіреді (көпір)",
            "Файлды жылдам оқиды",
            "Объектілерді жазады",
            "Тек сандарды оқиды",
            "Мәліметтерді шифрлайды"
        ],
        correct: 0
    },
    {
        question: "RandomAccessFile класының ерекшелігі неде?",
        options: [
            "Файлдың кез келген жерінен оқуға және жазуға мүмкіндік береді",
            "Тек оқуға арналған",
            "Тек жазуға арналған",
            "Желілік ағын",
            "Буферленген ағын"
        ],
        correct: 0
    },
    {
        question: "JarOutputStream класы не үшін қолданылады?",
        options: [
            "Деректерді .jar архивіне жазу және сығу үшін",
            "Мәтіндік файл жасау үшін",
            "Дерекқорға қосылу үшін",
            "Суреттерді өңдеу үшін",
            "XML файлды оқу үшін"
        ],
        correct: 0
    },
    {
        question: "Externalizable интерфейсінің Serializable-дан айырмашылығы?",
        options: [
            "Сериализация процесін толықтай программист басқарады (writeExternal, readExternal)",
            "Айырмашылығы жоқ",
            "Автоматты түрде жұмыс істейді",
            "Тек статикалық өрістерді сақтайды",
            "Тек public өрістерді сақтайды"
        ],
        correct: 0
    },
    {
        question: "File.separator не үшін қажет?",
        options: [
            "Операциялық жүйеге тәуелсіз жол айырғышын (мысалы, «/» немесе «\\») алу үшін",
            "Файлдарды бөлу үшін",
            "Мәтінді жолдарға бөлу үшін",
            "Файл атын өзгерту үшін",
            "Архив жасау үшін"
        ],
        correct: 0
    },
    {
        question: "Files.walk() әдісі не істейді?",
        options: [
            "Файлдар ағашын (директорияларды) аралап шығады",
            "Файлды өшіреді",
            "Файлды көшіреді",
            "Файл мазмұнын оқиды",
            "Файл атрибуттарын өзгертеді"
        ],
        correct: 0
    },
    {
        question: "ObjectInputStream класының readObject() әдісі қайтарған объектіні не істеу керек?",
        options: [
            "Қажетті типке (классқа) келтіру (cast) керек",
            "String-ке айналдыру керек",
            "Ештеңе істеудің қажеті жоқ",
            "Integer-ге айналдыру керек",
            "Қайтадан жазу керек"
        ],
        correct: 0
    },
    {
        question: "Java-да ағын (thread) құрудың екі негізгі жолы қандай?",
        options: [
            "Thread класын мұралау және Runnable интерфейсін жүзеге асыру",
            "Process класын мұралау және Executable интерфейсін жүзеге асыру",
            "String класын мұралау",
            "Тек Thread класын мұралау арқылы",
            "Тек Runnable интерфейсін жүзеге асыру арқылы"
        ],
        correct: 0
    },
    {
        question: "Ағынды іске қосу үшін қай әдіс шақырылады?",
        options: [
            "start()",
            "run()",
            "init()",
            "execute()",
            "begin()"
        ],
        correct: 0
    },
    {
        question: "Ағынның орындайтын коды қай әдістің ішінде жазылады?",
        options: [
            "run()",
            "start()",
            "main()",
            "process()",
            "launch()"
        ],
        correct: 0
    },
    {
        question: "Thread класының sleep(long millis) әдісі не істейді?",
        options: [
            "Ағынды көрсетілген уақытқа (миллисекунд) ұйықтатады (кідіртеді)",
            "Ағынды толығымен тоқтатады (stop)",
            "Ағынды жояды",
            "Ағынның басымдығын (priority) өзгертеді",
            "Басқа ағындарды блоктайды"
        ],
        correct: 0
    },
    {
        question: "Runnable интерфейсінде қанша абстрактілі әдіс бар?",
        options: [
            "1 (run)",
            "0",
            "2 (start, run)",
            "3",
            "5"
        ],
        correct: 0
    },
    {
        question: "join() әдісінің қызметі қандай?",
        options: [
            "Ағымдағы ағынды тоқтатып, join шақырылған ағынның аяқталуын күтеді",
            "Ағынды екіге бөледі",
            "Жаңа ағын қосады",
            "Ағындарды синхрондауды өшіреді",
            "Ағынды \"daemon\" қылады"
        ],
        correct: 0
    },
    {
        question: "Ағындар арасындағы деректер тұтастығын сақтау үшін қандай кілт сөз қолданылады (блоктау үшін)?",
        options: [
            "synchronized",
            "volatile",
            "transient",
            "static",
            "final"
        ],
        correct: 0
    },
    {
        question: "synchronized кілт сөзі қайда қолданылуы мүмкін?",
        options: [
            "Әдістерде және код блоктарында",
            "Тек әдістерде",
            "Тек блоктарда",
            "Тек класс атының алдында",
            "Тек айнымалыларда"
        ],
        correct: 0
    },
    {
        question: "volatile кілт сөзінің мақсаты не?",
        options: [
            "Айнымалының мәнін кэштемей, әрқашан негізгі жадтан оқуды қамтамасыз ету",
            "Айнымалыны өзгертуге тыйым салу",
            "Айнымалыны сериализациялау",
            "Айнымалыны private ету",
            "Айнымалыны статикалық ету"
        ],
        correct: 0
    },
    {
        question: "Object класының ағындармен қарым-қатынас жасауға арналған әдістері?",
        options: [
            "wait(), notify(), notifyAll()",
            "sleep(), yield()",
            "start(), run()",
            "join(), interrupt()",
            "stop(), suspend()"
        ],
        correct: 0
    },
    {
        question: "wait() әдісін шақырғанда не болады?",
        options: [
            "Ағын мониторды (lock) босатып, күту күйіне ауысады",
            "Ағын жұмысын аяқтайды",
            "Ағын ұйықтайды, бірақ мониторды босатпайды",
            "Бағдарлама қате береді",
            "Ағынның приоритеті төмендейді"
        ],
        correct: 0
    },
    {
        question: "notify() әдісі не істейді?",
        options: [
            "Күтіп тұрған ағындардың біреуін кездейсоқ оятады",
            "Барлық күтіп тұрған ағындарды оятады",
            "Ағынды тоқтатады",
            "Мониторды бұғаттайды",
            "Ерекше жағдай тудырады"
        ],
        correct: 0
    },
    {
        question: "Ағынның күйлеріне (States) қайсысы ЖАТПАЙДЫ?",
        options: [
            "DELETED",
            "NEW",
            "RUNNABLE",
            "BLOCKED",
            "WAITING"
        ],
        correct: 0
    },
    {
        question: "Daemon-ағын (Daemon thread) деген не?",
        options: [
            "Негізгі ағындарға қызмет көрсететін фондық ағын (мысалы, Garbage Collector)",
            "Ең жоғары басымдығы бар ағын",
            "Вирусты ағын",
            "Тоқтатуға болмайтын ағын",
            "Желілік ағын"
        ],
        correct: 0
    },
    {
        question: "Барлық негізгі (user) ағындар жұмысын аяқтаса, Daemon ағындар не істейді?",
        options: [
            "Автоматты түрде тоқтайды",
            "Жұмысын жалғастыра береді",
            "Ерекше жағдай лақтырады",
            "Қайта іске қосылады",
            "main ағынына айналады"
        ],
        correct: 0
    },
    {
        question: "Ағынның басымдығын (priority) орнату үшін қай әдіс қолданылады?",
        options: [
            "setPriority()",
            "getPriority()",
            "changePriority()",
            "setRank()",
            "makeImportant()"
        ],
        correct: 0
    },
    {
        question: "Java-да ағынның минималды және максималды басымдығы қандай?",
        options: [
            "1 және 10",
            "0 және 10",
            "1 және 100",
            "0 және 1",
            "-1 және 1"
        ],
        correct: 0
    },
    {
        question: "Deadlock (тұйық) деген не?",
        options: [
            "Екі немесе одан да көп ағындар бір-бірінің ресурстарын босатуын шексіз күтіп қалған жағдай",
            "Ағынның сәтті аяқталуы",
            "Ағынның өліп қалуы",
            "Жадтың толып кетуі",
            "Процессордың қызып кетуі"
        ],
        correct: 0
    },
    {
        question: "Callable интерфейсінің Runnable интерфейсінен айырмашылығы неде?",
        options: [
            "Callable нәтиже қайтара алады (call әдісі) және ерекше жағдай лақтыра алады",
            "Айырмашылығы жоқ",
            "Runnable нәтиже қайтарады",
            "Callable ағынды іске қоспайды",
            "Callable тек абстрактілі кластарда қолданылады"
        ],
        correct: 0
    },
    {
        question: "ExecutorService деген не?",
        options: [
            "Ағындарды (пулды) басқаруға арналған жоғары деңгейлі интерфейс",
            "Ерекше жағдайларды өңдеу қызметі",
            "Файлдарды оқу қызметі",
            "Деректер қорымен жұмыс істейтін класс",
            "Виртуалды машина"
        ],
        correct: 0
    },
    {
        question: "Future объектісі не үшін қолданылады?",
        options: [
            "Асинхронды тапсырманың нәтижесін алу үшін",
            "Болашақты болжау үшін",
            "Ағынды өшіру үшін",
            "Ағын атауын өзгерту үшін",
            "Жаңа ағын құру үшін"
        ],
        correct: 0
    },
    {
        question: "Ағынды қауіпсіз тоқтатудың (stop) ең дұрыс жолы қандай?",
        options: [
            "Айнымалы-жалауша (flag) немесе interrupt() әдісін қолдану",
            "stop() әдісін шақыру (Deprecated)",
            "destroy() әдісін шақыру",
            "Компьютерді өшіру",
            "suspend() қолдану"
        ],
        correct: 0
    },
    {
        question: "yield() әдісі не істейді?",
        options: [
            "Ағымдағы ағын процессор уақытын басқа бірдей басымдықтағы ағындарға беруге дайын екенін білдіреді",
            "Ағынды мәңгілікке тоқтатады",
            "Ағынды жояды",
            "Ерекше жағдай тудырады",
            "Ағынды блоктайды"
        ],
        correct: 0
    },
    {
        question: "Синхрондау кезінде объектінің несі қолданылады?",
        options: [
            "Мониторы (немесе құлпы/lock)",
            "Хэш-коды",
            "Аты",
            "Өлшемі",
            "Типі"
        ],
        correct: 0
    },
    {
        question: "Статикалық synchronized әдіс нені блоктайды?",
        options: [
            "Класс объектісін (Class object)",
            "Объектіні (this)",
            "Ешнәрсені",
            "Барлық ағындарды",
            "Жергілікті айнымалыларды"
        ],
        correct: 0
    },
    {
        question: "Race condition (Жарыс жағдайы) деген не?",
        options: [
            "Бірнеше ағын ортақ деректерге бір уақытта дұрыс емес қатынас жасап, нәтиженің болжанбайтын болуы",
            "Ағындардың жылдам жұмыс істеуі",
            "Ағындардың жарысып аяқталуы",
            "Жақсы синхрондалған код",
            "Ағынның басымдығын өзгерту"
        ],
        correct: 0
    },
    {
        question: "AtomicInteger класы не үшін қажет?",
        options: [
            "Көпағынды ортада бүтін сандармен атомдық (бөлінбейтін) операцияларды орындау үшін",
            "Бүтін сандарды файлға жазу үшін",
            "Сандарды бөлу үшін",
            "Үлкен сандармен жұмыс істеу үшін",
            "Сандарды кездейсоқ таңдау үшін"
        ],
        correct: 0
    },
    {
        question: "ReentrantLock қай интерфейсті жүзеге асырады?",
        options: [
            "Lock",
            "Runnable",
            "Serializable",
            "Map",
            "List"
        ],
        correct: 0
    },
    {
        question: "IllegalMonitorStateException қашан пайда болады?",
        options: [
            "wait/notify әдістерін синхрондалған контекстен тыс шақырғанда",
            "Монитор сынғанда",
            "Ағын тым көп күткенде",
            "Sleep әдісін шақырғанда",
            "Ағынды іске қосқанда"
        ],
        correct: 0
    },
    {
        question: "ThreadLocal класының мақсаты не?",
        options: [
            "Әрбір ағын үшін жеке, тәуелсіз айнымалы көшірмесін сақтау",
            "Барлық ағындарға ортақ айнымалы құру",
            "Ағындарды локализациялау (тілді өзгерту)",
            "Ағындарды санау",
            "Локальді желіні басқару"
        ],
        correct: 0
    },
    {
        question: "Пулдағы (ThreadPool) ағындарды қайта пайдаланудың (reuse) артықшылығы неде?",
        options: [
            "Ағындарды құру және жою шығындарын азайтады, өнімділікті арттырады",
            "Кодты азайтады",
            "Жадты көбірек қолданады",
            "Ешқандай артықшылығы жоқ",
            "Ағындарды баяулатады"
        ],
        correct: 0
    },
    {
        question: "BlockingQueue интерфейсінің ерекшелігі?",
        options: [
            "Кезек бос болса оқу кезінде, толық болса жазу кезінде ағынды блоктайды",
            "Ағынды ешқашан блоктамайды",
            "Тек бір элемент сақтайды",
            "Элементтерді сұрыптайды",
            "Элементтерді өшіреді"
        ],
        correct: 0
    },
    {
        question: "scheduleAtFixedRate әдісі қай интерфейсте бар?",
        options: [
            "ScheduledExecutorService",
            "ExecutorService",
            "Thread",
            "Runnable",
            "Callable"
        ],
        correct: 0
    },
    {
        question: "Fork/Join фреймворкі не үшін қолданылады?",
        options: [
            "Параллельді есептеулерді кіші бөліктерге бөліп (fork), нәтижелерін біріктіру (join) үшін",
            "Файлдарды біріктіру үшін",
            "Ағындарды жою үшін",
            "Дерекқор кестелерін қосу үшін",
            "Интернетке қосылу үшін"
        ],
        correct: 0
    },
    {
        question: "Ағын InterruptedException қатесін қашан алады?",
        options: [
            "Ағын ұйықтап жатқанда (sleep) немесе күтуде болғанда (wait) interrupt() шақырылса",
            "Ағын жұмыс істеп тұрғанда",
            "Ағын файлды оқығанда",
            "Ағын аяқталғанда",
            "Ешқашан алмайды"
        ],
        correct: 0
    },
    {
        question: "synchronized блогына кіру үшін ағын нені алуы керек?",
        options: [
            "Объект мониторын (құлпын)",
            "Рұқсат қағазын",
            "Басымдықты",
            "Парольді",
            "IP мекенжайды"
        ],
        correct: 0
    },
    {
        question: "CountDownLatch синхронизаторы не істейді?",
        options: [
            "Белгілі бір оқиғалар саны орындалғанша бір немесе бірнеше ағынды күттіреді",
            "Ағындарды санамайды",
            "Ағындарды тоқтатады",
            "Уақытты санайды",
            "Циклді басқарады"
        ],
        correct: 0
    },
    {
        question: "Semaphore (Семафор) не үшін қолданылады?",
        options: [
            "Ресурсқа бір уақытта қатынасатын ағындар санын шектеу үшін",
            "Ағындарды бояу үшін",
            "Тек бір ағынды жіберу үшін",
            "Жол қозғалысын реттеу үшін",
            "Ағындарды жылдамдату үшін"
        ],
        correct: 0
    },
    {
        question: "CyclicBarrier мен CountDownLatch айырмашылығы?",
        options: [
            "CyclicBarrier қайта қолданылуы мүмкін (reset), ал CountDownLatch бір реттік",
            "Айырмашылығы жоқ",
            "CountDownLatch қайта қолданылады",
            "CyclicBarrier тек бір ағын үшін",
            "CountDownLatch күтпейді"
        ],
        correct: 0
    },
    {
        question: "Collections.synchronizedList() не қайтарады?",
        options: [
            "Ағындар үшін қауіпсіз (thread-safe) тізімді",
            "Кәдімгі тізімді",
            "Тек оқуға арналған тізімді",
            "Бос тізімді",
            "Сұрыпталған тізімді"
        ],
        correct: 0
    },
    {
        question: "ConcurrentHashMap класының Hashtable класынан артықшылығы?",
        options: [
            "Бүкіл картаны емес, тек оның бөліктерін (сегменттерін) блоктайды, бұл өнімділікті арттырады",
            "Жай HashMap сияқты жұмыс істейді",
            "Hashtable жылдамырақ",
            "ConcurrentHashMap синхрондалмайды",
            "Hashtable null кілттерді қабылдайды"
        ],
        correct: 0
    },
    {
        question: "Thread.currentThread() әдісі не қайтарады?",
        options: [
            "Осы код орындалып жатқан ағымдағы ағын объектісіне сілтемені",
            "Жаңа ағынды",
            "Басты (main) ағынды",
            "null",
            "Ағынның атын"
        ],
        correct: 0
    },
    {
        question: "Ағынды қайта start() әдісімен іске қосуға бола ма?",
        options: [
            "Жоқ, IllegalThreadStateException лақтырылады",
            "Иә, болады",
            "Иә, егер ағын аяқталса",
            "Иә, егер reset() жасасақ",
            "Тек run() әдісін шақырсақ болады"
        ],
        correct: 0
    },
    {
        question: "notifyAll() мен notify() айырмашылығы?",
        options: [
            "notifyAll барлық күтіп тұрған ағындарды оятады, notify тек біреуін",
            "notify барлығын оятады",
            "notifyAll ағындарды өшіреді",
            "Айырмашылығы жоқ",
            "notifyAll тек бір ағынды оятады"
        ],
        correct: 0
    },
    {
        question: "Егер run() әдісін тікелей шақырсақ (start-сыз) не болады?",
        options: [
            "Код жаңа ағында емес, ағымдағы ағында кәдімгі әдіс сияқты орындалады",
            "Жаңа ағын құрылады",
            "Қате шығады",
            "Ештеңе орындалмайды",
            "Компьютер өшеді"
        ],
        correct: 0
    },
    {
        question: "Livelock деген не?",
        options: [
            "Deadlock сияқты, бірақ ағындар күйлерін өзгерте береді, бірақ пайдалы жұмыс жасамайды",
            "Ағынның тірі қалуы",
            "Жылдам ағын",
            "Синхрондау қатесіз жұмыс",
            "Ағынды құлыптау"
        ],
        correct: 0
    },
    {
        question: "Starvation (Ашығу) проблемасы дегеніміз не?",
        options: [
            "Төмен басымдықты ағынның ресурстарға қол жеткізе алмай, ұзақ уақыт күтіп қалуы",
            "Ағынның жады жетіспеуі",
            "Процессордың тоқтап қалуы",
            "Ағынның жойылуы",
            "Деректердің жоғалуы"
        ],
        correct: 0
    },
    {
        question: "CopyOnWriteArrayList қашан тиімді?",
        options: [
            "Оқу операциялары көп, ал өзгерту (жазу) аз болғанда",
            "Жазу операциялары көп болғанда",
            "Тек жазу үшін",
            "Кез келген жағдайда",
            "Ешқашан тиімді емес"
        ],
        correct: 0
    },
    {
        question: "ExecutorService.shutdown() әдісі не істейді?",
        options: [
            "Жаңа тапсырмаларды қабылдауды тоқтатады, бірақ кезектегі тапсырмаларды орындап бітіруге мүмкіндік береді",
            "Пулды бірден тоқтатады, тапсырмаларды өшіреді",
            "Компьютерді өшіреді",
            "Барлық ағындарды kill жасайды",
            "Пулды кідіртеді"
        ],
        correct: 0
    },
    {
        question: "SingleThreadExecutor пулында қанша ағын болады?",
        options: [
            "1",
            "0",
            "10",
            "Шексіз",
            "Процессор ядроларының санына тең"
        ],
        correct: 0
    }
    ]
};