import { link, gift, briefcase } from 'ionicons/icons'

interface Deet {
    work: {
      icon: string;
      text: string;
    };
    birthday: {
      icon: string;
      text: string;
    };
    links: {
      icon: string;
      text: string;
    };
  }
  
  export const deets : Deet[] = [
    {
      work: {
        icon: briefcase,
        text: 'Available'
      },
      birthday: {
        icon: gift,
        text: '15-05-2000'
      },
      links: {
        icon: link,
        text: '/links'
      }
    }
  ];
  

