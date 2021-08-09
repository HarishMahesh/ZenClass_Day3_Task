// Create your own resume data in JSON format


const Myresume = {
    personalInfo : {
        name :{
            firstName : 'harish',
            lastName : 'Mahesh'
        },
        emailId : 'harishmahesh1911@gamil.com',
        contactNo : ['9994451692','9442412206'],
        degree : 'BE',
        department : 'EEE',
        yearOfpassing : '2019',
        collegeName : 'PSG coimbatore',
        CGPA : 8.21
    },
    skillSets : ['js','HTML5','CSS3','C','SQL'],
    PortfolioLink : 'https://www.guvi.in/profile-edit?profileURL=harishmahesh1911',
    Awards : ['Best NSS volenteer'],
    workExperience : [
        {
            companyName : 'Temenos',
            Designation : 'Software tester',
            location : 'Chennai',
            WorkingPeriod : '08/09/2019 - 08/09/2020'
        },
        {
            companyName : 'Paypal',
            Designation : 'Software tester',
            location : 'Chennai',
            WorkingPeriod : '08/09/2010 - Present'
        }

    ],
    Project :[
        {
            title : 'project X',
            sourceCodelink : 'https://www.guvi.in/profile-edit?profileURL=harishmahesh1911'

        },
        {
            title : 'project Y',
            sourceCodelink : 'https://www.guvi.in/profile-edit?profileURL=harishmahesh1911'
            
        }
    ],
    OtherDetails : {
        currentCity : 'Ranipet',
        Gender : 'Male',
        NoOfArrears : 'NIL'
    }
    

}

console.log(Myresume);