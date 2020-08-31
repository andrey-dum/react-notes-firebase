import React, {Fragment} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'




const Home = () => {


    const notes = new Array(6)
        .fill('')
        .map((_, i) =>( {id: i, title: `Note ${i}`} ));

    return (
        <Fragment>

          <Form />

          <hr/>

          <Notes notes={notes}/>

        </Fragment>
    )
}

export default Home