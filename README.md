# camProject
This is a very simple project used to integrate camera api into a react native project 

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