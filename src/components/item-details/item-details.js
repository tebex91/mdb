import React, { Component } from 'react';

import './item-details.sass';
import poster from "../img/poster.jpg"

export default class ItemDetails extends Component {
    render() {
        return (
            <div className="item-details">
                <div>
                    <div className="favorite-label"><i className="fa fa-bookmark" aria-hidden="true" /></div>
                    <div className="item-rating">5.9</div>
                    <img className="item-poster" src={poster} alt="poster"/>
                    <div className="item-info">
                        <h1 className="item-title">Title</h1>
                        <div className="item-tagline">The scary movie. You will cry</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>year</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>country</td>
                                    <td>USA</td>
                                </tr>
                                <tr>
                                    <td>genre</td>
                                    <td>thriller</td>
                                </tr>
                                <tr>
                                    <td>budget</td>
                                    <td>$125000</td>
                                </tr>
                                <tr>
                                    <td>box office</td>
                                    <td>$327000</td>
                                </tr>
                                <tr>
                                    <td>runtime</td>
                                    <td>99 minutes</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="item-overview">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum et facilis
                            inventore itaque magni, natus nulla perspiciatis rerum sapiente sequi soluta, temporibus
                            vero voluptate voluptatem. Eaque nihil odio repudiandae. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Assumenda earum et facilis
                            inventore itaque magni, natus nulla perspiciatis rerum sapiente sequi soluta, temporibus
                            vero voluptate voluptatem. Eaque nihil odio repudiandae.Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Assumenda earum et facilis
                            inventore itaque magni, natus nulla perspiciatis rerum sapiente sequi soluta, temporibus
                            vero voluptate voluptatem. Eaque nihil odio repudiandae.Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Assumenda earum et facilis
                            inventore itaque magni, natus nulla perspiciatis rerum sapiente sequi soluta, temporibus
                            vero voluptate voluptatem. Eaque nihil odio repudiandae.</div>
                    </div>
                </div>
            </div>
        )
    }
}