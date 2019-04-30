export default function() {
  this.namespace = '/api';

  this.get('/users', function() {
    return {
      data: [{
        type: 'users',
        id: '1',
        attributes: {
          name: 'Grand Old Mansion',
          id: 'Veruca Salt',
          image: 'San Francisco',
          mood: 'San Francisco',
        }
      }]
    };
  });
}