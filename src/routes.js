const pathnames = {
    home: '/',
    doctor: '/doctor',
    vendor: '/vendor',
    hospital: '/hospital',
    signup: '/signup',
    login: '/login',
    verifyOtp: '/verifyotp',
    categories: {
        pathname: '/categories/:category',
        exploreInterested: '/categories' + '/exploreInterested',
    },
    products: {
        pathname: '/products/:productCategory',
        yourInterestedProducts: '/products' + '/yourInterestedProducts',
    },
    verification: '/verifyIdentity',
    doctorVerification: '/doctorVerification',
    vendorVerification: '/vendorVerification',
}

export default pathnames