import React, { useState, useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { GoCheck } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { useGlobalContext } from './context'

function SingleChalange({ chalange, index }) {
  const { chalanges, setChalanges } = useGlobalContext()
  const [succs, setSuccs] = useState(chalange.succ1)
  const [succs1, setSuccs1] = useState(chalange.succ2)
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(chalange.name)

  useEffect(() => {
    const newChalanges = chalanges.map((chal) => {
      if (chal.id === chalange.id) {
        return { ...chalange, succ1: succs }
      }
      return chal
    })
    setChalanges(newChalanges)
  }, [succs])
  useEffect(() => {
    const newChalanges = chalanges.map((chal) => {
      if (chal.id === chalange.id) {
        return { ...chalange, succ2: succs1 }
      }
      return chal
    })
    setChalanges(newChalanges)
  }, [succs1])

  const deleteChalange = () => {
    const newChalanges = chalanges.filter((chal) => chal.id != chalange.id)
    setChalanges(newChalanges)
  }

  const handleChange = () => {
    const newChalanges = chalanges.map((chal) => {
      if (chal.id === chalange.id) {
        return { ...chalange, name: editValue }
      }
      return chal
    })
    setChalanges(newChalanges)
    setEditing(false)
  }
  return !editing ? (
    <div className="chalange">
      <div className="change">
        <AiFillEdit
          style={{ color: '#6BE675' }}
          onClick={() => setEditing(true)}
        />
        <AiFillDelete style={{ color: '#E66B6B' }} onClick={deleteChalange} />
      </div>
      {chalange.name}
      <span className="success">
        <span
          style={{
            borderRight: '1px solid black',
            backgroundColor: `rgb(${(1 - (succs1 ? succs1 / 100 : 0)) * 200}, ${
              (succs1 ? succs1 / 100 : 0) * 200
            }, 0)`,
          }}
        >
          <input
            type="number"
            value={succs1}
            onChange={(e) => setSuccs1(e.target.value)}
          />
        </span>
        <span
          style={{
            backgroundColor: `rgb(${(1 - (succs ? succs / 100 : 0)) * 200}, ${
              (succs ? succs / 100 : 0) * 200
            }, 0)`,
          }}
        >
          <input
            type="number"
            value={succs}
            onChange={(e) => {
              const val = e.target.value
              if (val <= 100 && val >= 0) {
                setSuccs(e.target.value)
              }
            }}
          />
        </span>
      </span>
    </div>
  ) : (
    <form
      style={{ position: 'relative' }}
      onSubmit={(e) => {
        e.preventDefault()
        handleChange()
      }}
    >
      <input
        className="chalange"
        style={{ display: 'block', marginTop: '0px' }}
        type="text"
        placeholder="Edit Chalange"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button type="submit">
        <GoCheck style={{ color: '#6be675' }} />
        <MdClose
          style={{ color: '#e66b6b' }}
          onClick={() => setEditValue(chalange.name)}
        />{' '}
      </button>
    </form>
  )
}

export default SingleChalange
