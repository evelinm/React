import React, { useState } from 'react';

const  SearchBar = ({ data })=> {

    const [filterName, setFilterName] = useState([]);
    const [nameEntered, setNameEntered] = useState('');
    
    const handleFilter = (e) => {
       const query =  e.target.value.trim().toLowerCase();

       setNameEntered(e.target.value);

       const newFilter = data?.filter(({firstName, lastName}) => {
            return `${firstName} ${lastName}`.toLowerCase().includes(query) 
            || `${lastName} ${firstName}`.toLowerCase().includes(query);
       })

       if (query === "") {
           setFilterName([]);
       } else 
       {
          return setFilterName(newFilter)
       }
       
    }
    return (
        <div className="ui segment" id="searchBar">
            <form className="ui form">
                <div className="field">
                    <label> Customer Search </label>
                    <input id="query" type="text" value={nameEntered} onChange={handleFilter} />
                    { 
                        <div className="result">
                        {
                            filterName?.map((value,key) => {
                                return <div key={key}> 
                                {value.firstName} {value.lastName} 
                                </div>
                        })
                        }
                        </div>
                    }
                </div>
            </form>
        </div>
    )
}
export default SearchBar;