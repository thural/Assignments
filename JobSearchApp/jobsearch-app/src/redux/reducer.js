
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    data: [
        {
            id: 0,
            jobTitle: "Sales Representative (night shift)",
            companyName: "PITS Global Data Recovery Services",
            date: "15 May",
            description: `“Job Location: PITS Azerbaijan Office located at AF Business House, 203 Nizami St, Baku 1010, Azerbaijan 

            Working Days and Hours: 40 hours/weekly, 5 days/weekly, 18:00-2:00 (Baku time)
            
            Agreement Type and Pay: Service agreement with the US office, 1500-2500 AZN (NET) plus bonuses based on the performance. 
            
            Benefits: Taxi costs will be covered by the company. 
            
            Please note that we require applicants to have a high level of proficiency in English and prior experience in communicating with English language speakers. If these requirements are not met, we kindly ask that you refrain from submitting your resume for this position.
            
            Job Summary:
            The customer service/sales representative is responsible for providing effective customer service for all internal and external customers by using excellent, in-depth knowledge of company products and programs and communicating effectively with team members within the customer service department. You must be positive, energetic, and driven to be successful in a challenging and rewarding environment. You must be flexible and able to adjust to the quick and demanding changes of the business. You must be an excellent communicator with excellent phone etiquette and problem-solving skills. You must be able to work well in a collaborative and team-oriented environment. 
            
            Responsibilities: 
            Answer customer calls, e-mails, messages, provide the fast and correct information to incoming customers’ inquiries. 
            Make phone calls based on the received customers’ inquiries, register the customers’ details, and create shipping labels, convert the leads to the customers. 
            Record call logs in Salesforce CRM. 
            Follow up with the customers to achieve the greatest number of converted customers. 
            Prepare and submit quotes, negotiate the price, and collect payments. 
            Submit shipping labels to the customers and schedule their visits to the office 
            Work closely with the accounting and technical departments to resolve different issues, including disputes. 
            Provide timely feedback to the management team regarding service failures or customer concerns. 
            Utilize all resources and tools to troubleshoot and diagnose customers’ issues. 
            Identify and escalate priority issues. 
            Collect testimonials from the customers. 
            Schedule the data verification process and assist during the process as needed. 
            Deliver exceptional customer service to build customer satisfaction and loyalty. `,
        },
        {
            id: 1,
            jobTitle: "Receptionist",
            companyName: "Gafar Group",
            date: "02 May",
            description: `Namizədə tələblər:
            Yaş həddi: 21-33 yaş
            İş təcrübəsi: 1-3 il
            Dil bilikləri : Azərbaycan və Rus dili, İngilis dili olsa daha yaxşı
            Komputer bilikləri: MS Office proqramları (Word və Excel) əla səviyyədə
            Məsuliyyətli, punktual, ünsiyyət qurmaq bacarığı
            Komandada işləmək bacarığı
            İş barədə məlumat:
            Telefon zənglərinin cavablandırılması və müvafiq informasiyanın verilməsi
            Qonaqların qarşılanması və qeydiyyatı
            Hesabatların hazırlanması
            Həvalə olunmuş vəzifə öhdəliklərinin vaxtında və keyfiyyətli həyata kecirilməsi
            Rəhbərlik tərəfindən verilən digər tapşırıqların icra edilməsi
            Əmək haqqı-  razılaşdırma ilə
            İş qrafiki –  09:00-dan 18:00-dək,  həftədə 1 dəfə istirahət
            Ünvan: Babək prospekti, Rusel Plaza. `,
        },
        {
            id: 2,
            jobTitle: "HR Təcrübə Proqramı",
            companyName: "Port Education Center",
            date: "06 Iyun",
            description: `"PORT Education Center" MMC tərəfindən təşkil olunan "GAVALI GROUP" MMC şirkətində keçiriləcək HR Təcrübə proqramının qeydiyyatına başladıq. Bu proqramda siz HR sahəsini praktiki olaraq real sənədlər üzrə öyrənib,təcrübə və biliyinizi daha da artıracaqsınız. 

            Qeyd edək Təcrübə proqramı nəzəri olaraq keçirilmir. Yalnız praktiki olaraq sənədlər üzrə öyrədiləcək!
            
            Təcrübə Proqramında nələr öyrənəcəksiniz:
            Real şirkətlərin sənədləri üzrə praktiki iş,
            0-dan İşə qəbul sistemi,
            ƏMAS elektron sistemdə işçilərin qəbul edilməsi,
            E-gov.az saytla praktiki iş,
            İSB.AZ saytda işçilərin sığortalanması
            Əmək müqavilələrinin bağlanılması,
            İşçilərin xitam verilməsi,
            Əmrlərin hazırlanması,
            Əmək haqqı hesablanması,
            Əmək haqqı kartlarının sifarişlərinin verilməsi,
            Attestasiya,
            İşçilərin mükafatlandırılması,
            Ştat cədvəlinin hazırlanması,
            Məzuniyyətlərin verilməsi,
            Şirkətin strukturunun qurulması, 
            Tabel cədvəlinin hazırlanması,
            Əmək kitabçalarının doldurulması, 
            Şəxsi hesab vərəqələrinin doldurulması,
            HR-lar üçün Excel,
            Kargüzarlıq sənədlərlə praktiki işlər və kadrlara aid digər sənədlərin öyrənilməsi.`,
        },
        {
            id: 3,
            jobTitle: "Mühasib-operator",
            companyName: "Green Food Group",
            date: "08 May",
            description: `Vəzifə öhdəlikləri:
            Bank hesabları üzrə ödənişlərin həyata keçirilməsi və gündəlik olaraq 1C proqramına işlənməsi ;
            Pul vəsaitlərinin hərəkətinin təmin edilməsi , Kassa sənədlərinin hazırlanması,mədaxil,məxaric orderlərinin yazılması  və gündəlik olaraq 1C proqramına işlənməsi ;
            E-qaimələrin yazılması ;
            Müqavilələrin tərtibi ;
            Göndərilən və gələn e-qaimələrin 1C proqramına işlənməsi ;
            Əmək haqqı, məzuniyyət, xəstəlik vərəqəsinin hesablanması ;
            Debitor və kreditor hesablaşmaların aparılması, üzləşmə aktlarının hazırlanması ;
            Uçot üzrə bütün əməliyyatların 1C proqramına işlənilməsi ;
            Rəhbərliyin digər tapşırıqlarının vaxtında yerinə yetirilməsi.`,
        },
        {
            id: 4,
            jobTitle: "Kredit mütəxəssisi (Sumqayıt)",
            companyName: "International BOKT",
            date: "11 May",
            description: `İş barədə məlumat:
            Öz bacarıqları daxilində birbaşa rəhbəri tərəfindən qoyulmuş hədəflərə çatmaq;
            Bütün fəaliyyətini təşkilatın siyasət və prosedurlarına uyğun şəkildə həyata keçirmək;
            Yeni müştəriləri cəlb etmək üçün aktiv marketinq təbliğatını həyata keçirmək;
            Müştəriyə təşkilatın kredit məhsullarına dair məsləhət vermək;
            Kredit ərizələrini qəbul etmək, müştərilərin və zaminlərin (əgər mövcuddursa) biznes təhlilini aparmaq.
            Əmək haqqı 400-600 AZN + motivasiya
            İş rejimi : 09:00 – 18:00
            Tələblər:
            Azərbaycan dili (Rus dili arzuolunandır);
            Analitik düşüncə;
            Әla ünsiyyət qurma və komandada işləmək bacarığı;
            Bank və ya bank olmayan kredit təşkilatında (kredit mütəxəssisi) işləyən lombard kredit portfeli olan namizədlər qəbul olunur.`,
        },
        {
            id: 5,
            jobTitle: "Təcrübəçi",
            companyName: "The German - Azerbaijani Chamber of Commerce",
            date: "02 May",
            description: `Alman-Azərbaycan Xarici Ticarət Palatasına (AHK Azərbaycan) (www.ahk-baku.de) təcili təcrübəçi tələb olunur. Təcrübə müddəti 3-6 ay təşkil edir

            Əsas vəzifə və öhdəlikləri:
            AHK Azərbaycanın İctimaiyyətlə Əlaqələr üzrə işlərinin təşkilinə dəstək
            Xəbər bülleteni və Press relizlərin hazırlanması və yayılması
            AHK Azərbaycanın sosial media hesablarının idarə olunması və aktuallaşdırılması
            Biznes nümayəndə heyəti səfərlərinin və AHK Azərbaycanın digər tədbirlərinin təşkilində iştirak
            AHK Azərbaycanın şöbələrinin işinin dəstəklənməsi
            Ünvan araşdırmaları, bazar araşdırmaları və işgüzar tərəfdaşların axtarışlarında iştirak
            AHK Azərbaycanın əlaqə məlumatları bazasının işlənilməsi və aktuallaşdırılması
            Tərcümə işləri
            İnzibati vəzifələr
            Tələblər:`,
        },
    ]
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload;
        },
        changeId: (state, action) => {
            console.log(action.payload);
            state.id = action.payload;
        }
    },
})


export default counterSlice.reducer;

export const { getData, changeId } = counterSlice.actions;