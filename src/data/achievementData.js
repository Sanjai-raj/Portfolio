import pega from '../assets/png/pega.png'
import cisco from '../assets/png/cisco.png'

export const achievementData = {
    bio : "The only skill that will be important in the 21st century is the skill of learning new skills. Everything else will become obsolete over time. — Peter Drucker",
    achievements : [
        {
            id : 1,
            title : 'The Complete Full-Stack Web Development Bootcamp',
            details : 'A full-stack course from Udemy',
            date : 'March 2025',
            field : 'Coding',
            image : 'https://udemy-certificate.s3.amazonaws.com/image/UC-0cd075aa-f55b-4d9f-aec0-119020a4e792.jpg?v=1611846350000'
        },
        {
            id : 2,
            title : '100 Days of Code: The Complete Python Pro Bootcamp',
            details : 'A python course from Udemy',
            date : 'November 2024',
            field : 'Coding',
            image : 'https://udemy-certificate.s3.amazonaws.com/image/UC-91ae3ea2-39ee-4a57-bf23-d397aff0d9a7.jpg?v=1621951317000'
        },
        {
            id : 3,
            title : 'Pega Certified System Architect (CSA)',
            details : 'Pega certification on BPM',
            date : 'July, 2024',
            field : 'BPM',
            image : pega
        },
        {
            
            title: "Cisco Networking Essentials",
            details: "IP addressing and network concepts",
            date: "April, 2023",
            field: "Computer Networking",
            image : cisco
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/