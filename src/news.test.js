import React from 'react';
import { shallow } from 'enzyme';
import News from './news';
import NEWS_REQUEST_STATUS from './reduser/news';
import { Provider } from 'react-redux';

describe('News', () => {
    const props = {
        list: [],
        status: null,
        loadData: () => { },
    }

    describe('News initial', () => {
        const mockFetchLoadData = jest.fn()
        const nextProps = {
            ...props,
            loadData: mockFetchLoadData
        }
        const news = shallow(<Provider store={{ getState: jest.fn(), dispatch: jest.fn() }}><News {...nextProps} /></Provider>)
        it('render properly', () => {
            expect(news).toMatchSnapshot()
        })
        it('dispatches the `loadData()`', () => {
            expect(mockFetchLoadData).toHaveBeenCalledTimes(1)
        })
    })

    describe('News is Loading', () => {
        const nextProps = {
            ...props,
            status: NEWS_REQUEST_STATUS.LOADING,
        }
        const news = shallow(<Provider store={{ getState: jest.fn(), dispatch: jest.fn() }}><News {...nextProps} /></Provider>)
        it('render preloader', () => {
            expect(news.find('p').text()).toEqual('Loading...')
        })

    })
    describe('News is render', () => {
        const nextProps = {
            ...props,
            status: !NEWS_REQUEST_STATUS.ERROR,
            list: [1]
        }
        const news = shallow(<Provider store={{ getState: jest.fn(), dispatch: jest.fn() }}><News {...nextProps} /></Provider>)
        it('render properly', () => {
            expect(news.find('p').text()).toHaveLength(1)
        })

    })
    describe('News with error', () => {
        const nextProps = {
            ...props,
            status: NEWS_REQUEST_STATUS.ERROR,
        }
        const news = shallow(<Provider store={{ getState: jest.fn(), dispatch: jest.fn() }}><News {...nextProps} /></Provider>)
        it('render properly', () => {
            expect(News).toMatchSnapshot()
        })
        it('render error', () => {
            expect(news.find('p').text()).toEqual('ERROR')
        })

    })
})