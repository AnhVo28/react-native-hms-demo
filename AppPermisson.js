import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native'


const PLATFORM_BACKGROUND_LOCATION_PERMISSON = {
    android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS
}

const PLATFORM_LOCATION_PERMISSON = {
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS
}

const PLATFORM_ACTIVITY_DETECTION_PERMISSON = {
    android: PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION,
    ios: null
}



const REQUEST_PERMISSON_TYPE = {
    location: PLATFORM_LOCATION_PERMISSON,
    backgoundLocation : PLATFORM_BACKGROUND_LOCATION_PERMISSON,
    activityDection: PLATFORM_ACTIVITY_DETECTION_PERMISSON
}

const PERMISSION_TYPE = {
    location: 'location',
    backgoundLocation: 'backgoundLocation',
    activityDection: 'activityDection'
}

class AppPermission {
    
    checkPermission = async (type)=>{
        const permissions = REQUEST_PERMISSON_TYPE[type][Platform.OS]
        if (!permissions){
            return true
        }
        try {
            const result = await check(permissions)
            if (result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions) // request permission
        } catch (error) {
            return false
        }

    }

    requestPermission = async (permissions) =>{
        try {
            const result = await request(permissions)
            console.log('AppPermisson requestPermission result: ', result);
            return result === RESULTS.GRANTED
        } catch ( error) {
            return false
        }

    }

    requestMultiple = async (types )=>{
        const results = []
        for ( const type of types) {
            const permisson = REQUEST_PERMISSON_TYPE[type][Platform.OS]
            if ( permisson ){
                const result = await this.requestPermission(permisson)
                results.push(result)
            }    
        }
        for (const result of results){
            if (!result) {
                return false
            }
        }

        return true
    }
}


const Permission = new AppPermission()


export { Permission, PERMISSION_TYPE }

