# camProject
This is a very simple project used to integrate camera api into a react native project 


To run use the following 
-- yarn install 
-- cd ios && pod install
 
Then use react-native run-android or run-its

Not that camera api is only available at the hardware and not on simulators 



#Permissions
To use the camera,

On Android you must ask for camera permission:

  ```<uses-permission android:name="android.permission.CAMERA" />```

To enable video recording feature you have to add the following code to the AndroidManifest.xml:

  ```<uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />```

5j2jduk

On iOS, you must update Info.plist with a usage description for camera
```
<key>NSCameraUsageDescription</key>
<string>Your own description of the purpose</string>
```
    
For more information on installation, please refer to installation requirements.