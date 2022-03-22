
import { CollectionItems } from '../components/CollectionItems';
import { ListItem } from '../components/ListItem';
import { infracionesSeguridadCiudadana } from '../data';

export const SeguridadCiudadana = () => {


    return (
        <>
            <div>Seguridad ciudadana</div>;

            <div className='container'>
                <CollectionItems
                    title='Leves'
                    className='bg-success'
                    style={{
                        //extended styles
                    }}
                >

                    {
                        infracionesSeguridadCiudadana.Leves.map((item, i) => (
                            <ListItem key={i} item={item} className='alert alert-success' style={{
                                //extended styles
                            }} />
                        ))
                    }
                </CollectionItems>



                <CollectionItems
                    title='Graves'
                    className='bg-warning'
                    style={{
                        //extended styles
                    }}
                >

                    {
                        infracionesSeguridadCiudadana.Graves.map((item, i) => (
                            <ListItem key={i} item={item} className='alert alert-warning' style={{
                                //extended styles
                            }} />
                        ))
                    }
                </CollectionItems>

                <CollectionItems
                    title='Muy Graves'
                    className='bg-danger'
                    style={{
                        //extended styles
                    }}
                >

                    {
                        infracionesSeguridadCiudadana['Muy Graves'].map((item, i) => (
                            <ListItem key={i} item={item} className='alert alert-danger' style={{
                                //extended styles
                            }} />
                        ))
                    }
                </CollectionItems>




            </div>
        </>
    )
};
