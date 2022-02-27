const urls = {
  frontend_url:
    window.location.hostname === 'localhost' ? 'http://localhost:3000/' : '/',
  base_api:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api/'
      : '/api/',
  base_upload:
    window.location.hostname === 'localhost' ? 'http://localhost:5000/' : '/',
  mapbox_api:
    'pk.eyJ1IjoibG1hcHMiLCJhIjoiY2tnZmlqc2hjMDB0dDJycGZpNnRsY3B1YSJ9.b2NZIdfAhEPUHJTw0c9gqA',
};

export default urls;
