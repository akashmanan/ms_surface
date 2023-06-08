// AutolinkedNativeModules.g.cpp contents generated by "react-native autolink-windows"
// clang-format off
#include "pch.h"
#include "AutolinkedNativeModules.g.h"

// Includes from @react-native-community/async-storage
#include <winrt/ReactNativeAsyncStorage.h>

// Includes from react-native-camera
#include <winrt/ReactNativeCameraCPP.h>

// Includes from react-native-permissions
#include <winrt/RNPermissions.h>

// Includes from react-native-screens
#include <winrt/RNScreens.h>

namespace winrt::Microsoft::ReactNative
{

void RegisterAutolinkedNativeModulePackages(winrt::Windows::Foundation::Collections::IVector<winrt::Microsoft::ReactNative::IReactPackageProvider> const& packageProviders)
{ 
    // IReactPackageProviders from @react-native-community/async-storage
    packageProviders.Append(winrt::ReactNativeAsyncStorage::ReactPackageProvider());
    // IReactPackageProviders from react-native-camera
    packageProviders.Append(winrt::ReactNativeCameraCPP::ReactPackageProvider());
    // IReactPackageProviders from react-native-permissions
    packageProviders.Append(winrt::RNPermissions::ReactPackageProvider());
    // IReactPackageProviders from react-native-screens
    packageProviders.Append(winrt::RNScreens::ReactPackageProvider());
}

}
