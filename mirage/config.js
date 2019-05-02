export default function() {
  this.namespace = '/api';

  this.get('/users', function() {
    return {
      data: [{
        type: 'users',
        id: '1',
        attributes: {
          name: 'Pepe Andres',
          mood: 10,
          image: 'https://picsum.photos/59',
        }
      }, {
        type: 'users',
        id: '2',
        attributes: {
          name: 'Juan Patracio',
          mood: 12,
          image: 'https://picsum.photos/60',
        }
      }, {
        type: 'users',
        id: '3',
        attributes: {
          name: 'Antonio Benz',
          mood: 21,
          image: 'https://picsum.photos/61',
        }
      },
      {
        type: 'users',
        id: '4',
        attributes: {
          name: 'Pepe Andres',
          mood: 79,
          image: 'https://picsum.photos/62',
        }
      },
      {
        type: 'users',
        id: '5',
        attributes: {
          name: 'San Andres',
          mood: 2,
          image: 'https://picsum.photos/58',
        }
      }]
    };
  });
}