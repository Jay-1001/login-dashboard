import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import './styleSheet.css';
import Button from 'react-bootstrap/Button';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function InputField(props) {
    const sizeText = props.inputSize ? props.inputSize : 'default';
    const inputType = props.inputType ? props.inputType : 'text';
    const className = props.addnClass ? ('form-control ' + props.addnClass) : 'form-control';
    const [type, setType] = useState(inputType);

    return (
        <div>
            {/* <InputGroup size={sizeText}>
                {(inputType === 'password') ?
                    <>
                        <input type={type} className={className} onChange={e => props.changeHandler(e)} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => {(type === 'password') ? setType('text') : setType('password')}}>Show</Button>
                        </InputGroup.Append>
                    </>
                    :
                    <input type={inputType} className={className} onChange={e => props.changeHandler(e)} />
                }
            </InputGroup> */}
            <InputGroup size={sizeText}>
                <input type={type} className={className} onChange={e => props.changeHandler(e)} />
                {(inputType === 'password') &&
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => {(type === 'password') ? setType('text') : setType('password')}}>
                            {(type === 'password') ? <FaRegEye/> : <FaRegEyeSlash/>}
                        </Button>
                    </InputGroup.Append>
                }
            </InputGroup>
        </div>
    )
}

export default InputField
