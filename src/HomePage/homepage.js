import React from 'react';
import { connect } from 'react-redux';
import SearchBarWithFilter from '../_components/search-bar-with-filter'
import { getDataActions, homepageActions } from '../_actions';
import Poster from '../_components/poster'
import { filterType } from '../_constants';

class HomePage extends React.Component {
    constructor(props){
        super(props);               
        const { dispatch } = this.props;
        dispatch(getDataActions.getData());
    }       

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(homepageActions.getPosterList('',''))
    }    
    
    handleSearchValue = (val) => {
        const { dispatch } = this.props;
        dispatch(homepageActions.saveValue(val));   
        if(val && val.length >= 3){
            dispatch(homepageActions.getPosterList(val, filterType.SEARCH))
        } else {
            dispatch(homepageActions.getPosterList('',''))
        }
    }

    handleSearchButton = () => {
        const { dispatch, searchValue } = this.props;
        if(searchValue){
            dispatch(homepageActions.getPosterList(searchValue, filterType.SEARCH))
        }
    }

    handleSortByDropdown = (type,ele) => {
        const { dispatch } = this.props;
        dispatch(homepageActions.getPosterList('', type))
    }

    render() {
        const { searchValue, posterList } = this.props;             
        return (
            <div className="col">                          
                <SearchBarWithFilter inputValue={searchValue} handleSearchValue={this.handleSearchValue} handleSortByDropdown={this.handleSortByDropdown} handleSearchButton={this.handleSearchButton}/>
                <div className="d-flex flex-wrap container mt-2 p-0">
                    {posterList && posterList.map((item,i) => {
                        return <Poster item={item} key={i}/>
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { getData: { items }, homepage: { searchValue, posterList, ts }} = state;
    return {        
        items,
        searchValue,
        posterList,
        ts
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };