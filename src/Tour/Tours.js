import React from 'react';
import Tour from './Tour'
const Tours = (props) => {
    return ( 
        <section>
            <div className='title'>
                <h2>تور های ما</h2>
                <div className='underline'></div>
            </div>
            <div>
                {props.tours.map(i=> <Tour removeTour={props.removeTour} key={i.id} {...i} />)}
            </div>
        </section>
     );
}
 
export default Tours;