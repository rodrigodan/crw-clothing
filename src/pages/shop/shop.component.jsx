import React from 'react';

import data from './shop.data'

import CollectionPreviews from '../../components/collection-previews/collection-previews'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: data
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className = 'shopPage'>
                {
                    
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreviews key = {id} {...otherCollectionProps} />
                    ))
          
                }
            </div>
        );
    }
}

export default ShopPage;