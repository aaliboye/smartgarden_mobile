import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JardinService {

  jardins: any[] = [
    {
      id: 0,
      nom: 'jardin 1',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        }

      ]
    },
    {
      id: 1,
      nom: 'jardin 2',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        }

      ]

    },
    {
      id: 2,
      nom: 'jardin 3',
      description: 'le plus grand',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      zones: [
        {
          id: 0,
          nom: 'Zone 1',
          description: 'Zone Nana menthe',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 1,
          nom: 'Zone 1',
          description: 'Zone resin',
          imageUrl: '',
          devices: 'devices'
        },
        {
          id: 2,
          nom: 'Zone 1',
          description: 'Zone guerté',
          imageUrl: '',
          devices: 'devices'
        }

      ]

    }
  ]

  constructor() { }

  getJardins(): any{
    return this.jardins

  }

  getJardin(id:any): any {
    return this.jardins[id]
  }

  getZone(idjardin: any){
    const jardin = this.getJardin(idjardin)
  }

}
