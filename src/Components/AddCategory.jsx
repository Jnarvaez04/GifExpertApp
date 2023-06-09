import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    

    const onInputChange = ({ target }) => {
        console.log( target.value)
        setInputValue( target.value );
    }

    const onSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        // setcategories( categories => [ inputValue, ...categories]);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange}
        />
    </form>
  )
}
