import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { GoCheck } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import SingleChalange from './SingleChalange'
import { useGlobalContext } from './context'

function Chalanges() {
  const [adding, setAdding] = useState(false)
  const { chalanges, setChalanges } = useGlobalContext()
  const succ1 =
    ((chalanges
      .map((chal) => chal.succ1)
      .reduce((total, num) => total + parseInt(num), 0) /
      100) *
      255) /
    chalanges.length
  const succ2 =
    ((chalanges
      .map((chal) => chal.succ2)
      .reduce((total, num) => total + parseInt(num), 0) /
      100) *
      255) /
    chalanges.length
  const [newChalange, setNewChalange] = useState({
    name: '',
    succ1: 0,
    succ2: 0,
    id: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newChalange.name) {
      setChalanges([...chalanges, newChalange])
      setNewChalange({ name: '', succ1: 0, succ2: 0, id: 0 })
      setAdding(false)
    } else {
      setAdding(false)
    }
  }
  return (
    <section className="challanges">
      <h1 className="chalange-heading">
        challanges{' '}
        <span className="initials">
          <span style={{ backgroundColor: `rgb(${255 - succ2}, ${succ2},0)` }}>
            K
          </span>
          <span style={{ backgroundColor: `rgb(${255 - succ1}, ${succ1},0)` }}>
            I
          </span>
        </span>
      </h1>
      {chalanges.map((chalange) => {
        return <SingleChalange chalange={chalange} key={chalange.id} />
      })}
      {!adding ? (
        <div className="add-chalange">
          <BsPlusCircle onClick={() => setAdding(true)} />
        </div>
      ) : (
        <form
          style={{ position: 'relative' }}
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <input
            className="chalange"
            style={{ display: 'block' }}
            type="text"
            placeholder="add new challange"
            value={newChalange.name}
            onChange={(e) => {
              setNewChalange({
                ...newChalange,
                name: e.target.value,
                id: new Date().getTime().toString(),
              })
            }}
          />
          <button type="submit">
            <GoCheck style={{ color: '#6be675' }} />
            <MdClose
              style={{ color: '#e66b6b' }}
              onClick={() => setNewChalange({ ...newChalange, name: '' })}
            />{' '}
          </button>
        </form>
      )}
    </section>
  )
}

export default Chalanges
