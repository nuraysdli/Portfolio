// 1. Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın.
let date = new Date();
let hour = date.getHours();

if(hour < 12 && hour >= 5){
    alert("Sabahınız xeyir olsun");
} else if(hour >= 12 && hour < 17){
    alert("Günortanız xeyir olsun");
} else if (hour >= 17 && hour < 24){
    alert("Axşamınız xeyir olsun");
} else{
    alert("Gecəniz xeyir olsun");
}

// 2. Object Destructing istifadə edərək employee  obyektindən məlumatları əldə edin. 
const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        namee: "Far For",
        relation: "Spouse"
      }
    }
  };

  const {
    name,
    department,
    contact: {
        email,
        phone,
        emergencyContact: {
            name: emergencyContactName,
            relation: emergencyRelation
        }
    }
  } = employee;

console.log(`name: "${name}", department: "${department}", email: "${email}",
phone: "${phone}", emergencyContactName: "${emergencyContactName}", emergencyRelation: "${emergencyRelation}"`);

// 3. Bu API-dən alınan məlumatları təmsil edir
const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30]    //[oxunma, bəyənmə, şərhlər]
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];
  
// 3.1 Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın
const [, secondArticle] = apiResponse;

const {
    id,
    title,
    author,
    stats
} = secondArticle;

// 3.2 stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)

const [views, comments, likes] = stats;

// 3.3 Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"

console.log(`ID: ${id}\nTitle: ${title}\nAuthor: ${author}\nViews: ${views}\nLikes: ${likes}\nComments: ${comments}`);


// 4.1. Optional chaining ilə təhlükəsiz şəkildə userData-dan məlumatları əldə edin
// 4.2. Nullish coalescing ilə əksik məlumatlar üçün default dəyərlər təyin edin 
function renderUserProfile(userData) {
    return {
      username: userData?.user?.username ?? "Nuray",
      avatar: userData?.user?.profile?.avatar ?? "/default-profil.png",
      bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
      email: userData?.user?.contact?.email ?? "təyin edilməyib",
      premium: userData?.user?.account?.premium ?? false
    };
  }

  console.log(renderUserProfile({
    user: {
      username: "tahir2023",
      profile: {
        avatar: "/users/tahir.jpg",
        bio: "JavaScript developer",
      },
      contact: {
        email: "tahir@example.com"
      },
      account: {
        premium: true
      }
    }
  }));
  
  console.log(renderUserProfile({
    user: {
      username: "aynur",
      profile: {
        bio: ""
      },
      contact: {}
    }
  }));
  
  console.log(renderUserProfile({
    user: {
      username: null
    }
  }));
  
  console.log(renderUserProfile({}));
  