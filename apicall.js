const getUserInfo = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_ONBOARDING_URL}/users?userId=${user_id}`, {
            headers: {
                Authorization: authentication,
            },
        })
        if (response.status === 200) {
            const user = response.data.result.content[0]
            if (user) {
                //Cookies.set('userId', user.id)
                localStorage.setItem('userId', user.id)
                setUserInfoSet({
                    ...userInfoSet,
                    id: user.id ? user.id : "",
                    fullname: user.fullname ? user.fullname : "",
                    email: user.email ? user.email : "",
                    phone: user.mobileNumber ? user.mobileNumber : "",
                })
                setAddressInfoSet({
                    address: user.address ? user.address.street : "",
                    city: user.address ? user.address.cityName : "",
                    postal: user.address ? user.address.zipCode : "",
                    country: user.address ? user.address.countryCode : "",
                    state: user.address ? user.address.state : "",
                    timezone: user.address ? user.address.timeZone : "",
                })
            } else {
                alert(`User not found against this id: ${user_id}`)
            }
        }
    } catch (error) {
        if (error.response) {
            console.error(error.response.status, error.response.data)
        } else if (error.request) {
            console.error("No response received:", error.request)
        } else {
            console.error("Error:", error.message)
        }
    }
}