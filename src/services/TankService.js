const TANK_ENDPOINT = 'https://crudcrud.com/api/3d8ac86949d141f5b68c72ae7857bc42/aquariums';

const getFetchOptions = (method, data) => ({ 
  method: method, 
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})

export const getTanks = async () => {
  try {
      const response = await fetch(TANK_ENDPOINT);
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const createTank = async (tank) => {
  try {
      const response = await fetch(TANK_ENDPOINT, getFetchOptions("POST", tank))
      return await response.json();
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const updateTank = async (tank) => {
  try {
      const tankWithoutId = { 
        name: tank.name,
        photo: tank.photo,
        volume: tank.volume,
        livestock: tank.livestock,
        log: tank.log
      };
      const response = await fetch(TANK_ENDPOINT + "/" + tank._id, getFetchOptions("PUT", tankWithoutId));
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}

export const deleteTank = async (tank) => {
  try {
      const response = await fetch(TANK_ENDPOINT + "/" + tank._id, { method: "DELETE" })
      return response;
  }
  catch(e) {
      console.log(e);
      return null;
  }
}