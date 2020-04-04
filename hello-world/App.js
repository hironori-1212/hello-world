import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default () => {
    return (
        <View style={
            {
                "alignItems": "flex-start",
                "paddingStart": 46,
                "paddingTop": 113,
                "flex": 1
            }
        } >
            <Text style={
                {
                    
                    "fontSize": 30,
                    "color": "rgba(0, 0, 0, 255)",
                    "marginStart": 104
                }
            } > LOGIN </Text>
            <View style={
                {
                    "alignItems": "flex-start",
                    "marginTop": 73
                }
            } >
                <View style={
                    {
                        "alignItems": "flex-start"
                    }
                } >
                    <View style={
                        {
                            "alignItems": "flex-start",
                            "paddingStart": 14,
                            "paddingTop": 10,
                            "width": 284,
                            "height": 46,
                            "borderRadius": 20,
                            "borderWidth": 1,
                            "borderColor": "rgba(112, 112, 112, 255)",
                            "backgroundColor": "rgba(249, 249, 249, 255)"
                        }
                    } >
                        <Text style={
                            {
                                
                                "fontSize": 20,
                                "color": "rgba(112, 112, 112, 255)"
                            }
                        } > Email </Text>
                    </View>
                </View>
                <View style={
                    {
                        "alignItems": "flex-start",
                        "marginTop": 46
                    }
                } >
                    <View style={
                        {
                            "alignItems": "flex-start",
                            "paddingStart": 14,
                            "paddingTop": 10,
                            "width": 284,
                            "height": 46,
                            "borderRadius": 20,
                            "borderWidth": 1,
                            "borderColor": "rgba(112, 112, 112, 255)",
                            "backgroundColor": "rgba(249, 249, 249, 255)"
                        }
                    } >
                        <Text style={
                            {
                                
                                "fontSize": 20,
                                "color": "rgba(112, 112, 112, 255)"
                            }
                        } > Password </Text>
                    </View>
                </View>
            </View>
            <View style={
                {
                    "alignItems": "flex-start",
                    "paddingStart": 51,
                    "paddingTop": 5,
                    "marginStart": 62,
                    "marginTop": 51,
                    "width": 160,
                    "height": 42,
                    "borderRadius": 20,
                    "borderWidth": 1,
                    "borderColor": "rgba(112, 112, 112, 255)",
                    "backgroundColor": "rgba(255, 255, 255, 255)"
                }
            } >
                <Text style={
                    {
                        
                        "fontSize": 24,
                        "color": "rgba(0, 0, 0, 255)"
                    }
                } > Login </Text>
            </View>
        </View>

    );
};