import React, { Component, useEffect, useState } from 'react';
import TankList from './components/TankList'
import { getTanks, createTank, updateTank, deleteTank } from './services/TankService';


export default function App() {
  const [tanks, setTanks] =useState( [] )

  const refreshTanks = async () => {
    const freshTanks = await getTanks()
    setTanks(freshTanks);
  }

  useEffect(() => {
    refreshTanks();
  }, [])

  const handleCreate = async (newTank) => {
    await createTank(newTank);
    refreshTanks();
  }

  const handleDelete = async (tank) => {
    await deleteTank(tank);
    refreshTanks();
  }

  const handleUpdate = async (tank) => {
    await updateTank(tank);
    refreshTanks();
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Tank Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="input-group mb-3">
        <input type="file" className="form-control" id="tankPhoto"/>
        <label className="input-group-text" htmlFor="tankPhoto">Upload Photo</label>
      </div>
      <TankList tanks={tanks} />
    </div>
  )
}
