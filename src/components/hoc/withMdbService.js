import React, { useContext } from 'react';
import MdbServiceContext from '../mdb-service-context';

const withMdbService = () => (Wrapped) => {
    return (props) => {
        const mdbService = useContext(MdbServiceContext)
        return (<Wrapped {...props}
                         mdbService = { mdbService } />)
    }
}

export default withMdbService;