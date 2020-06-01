import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAssetList, addNewAsset } from '../../actions/rootAction';

import Header from '../../components/header/Header'
import AseetEntry from '../../components/assetEntryForm/AseetEntry'
import AssetList from '../../components/assetLists/AssetList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './home.scss';

function Home() {
    const dispatch = useDispatch();

    const assetList = useSelector(state => state.HomeReducer.assetList);

    const [assetState, setAssetState] = React.useState({
        name: '',
        category: '',
        income: 0,
        area: 0,
        labelName: ''
    })

    const [labelArr, setLabel] = React.useState([])


    useEffect(() => {
        dispatch(getAssetList())
        return () => {
            // cleanup
        };
    }, [dispatch]);


    const onchangeEventHanlde = useCallback((e) => {
        const value = e.target.value;
        setAssetState({
            ...assetState,
            [e.target.name]: value
        });
    }, [assetState])

    const addLabelEvent = useCallback(
        (lableName) => {
            
            const Arr = labelArr;
            Arr.push(lableName)
            setLabel(Arr)

            setAssetState({
                ...assetState,
                labelName: ''
            });
        });

    const makeNewEntry = useCallback((param) => {
    
        const formData = {
            ...param,
            label: labelArr
        }
        dispatch(addNewAsset(formData));

    }, [])

    const handleDelete = useCallback((i) => {
        const Arr = labelArr;
            Arr.splice(i, 1);
            setLabel(Arr)
    },[labelArr])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Header />
                <AseetEntry onchangeEvent={onchangeEventHanlde}
                    state={assetState} addLabelEvent={addLabelEvent}
                    labelArr={labelArr}
                    makeNewEntry={makeNewEntry}
                    handleDelete={handleDelete}
                />
                <AssetList assetList={assetList}></AssetList>
                <Typography component="div" />
            </Container>
        </React.Fragment>
    )
}

export default Home
