export default function() {
  this.namespace = '/api';

  this.get('/songs', function() {
    return {
      data: []
    };
  });
}