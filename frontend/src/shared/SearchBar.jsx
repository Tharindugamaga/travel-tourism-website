import React,{useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

  const LocationRef =useRef('')
  const distanceRef =useRef('0')
  const maxGroupRef =useRef('0')

  const SearchHandler = ()=>{
    const location =LocationRef.current.value
    const distance =distanceRef.current.value
    const maxGroupSize =maxGroupRef.current.value
  
    if( location ===''|| distance  === '' || maxGroupSize === ''){
      return alert ('All Fields are required')
    }}


  return (
    <Col lg='12'>
      <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span><i className="ri-map-pin-line"></i></span>
            <div>
              <h6>Location</h6>
              <input type='text' placeholder='Where are you going'  ref={LocationRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 form__group form__group-fast'>
            <span><i className="ri-map-pin-time-line"></i></span>
            <div>
              <h6>Distance</h6>
              <input type='number' placeholder='Distance K/m' ref={distanceRef}/>
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 form__group form__group-last'>
            <span><i className="ri-group-line"></i></span>
            <div>
              <h6>Max people</h6>
              <input type='number' placeholder='0'  ref={maxGroupRef}/>
            </div>
          </FormGroup>
          <span className="search__icon" type="submit"  onClick={SearchHandler}>
          <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  )
}

export default SearchBar
