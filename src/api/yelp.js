import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer fdsbKSWGU_hlVNItMyBj36RMir05Q4BpAMTFUJHSLoJNTeUdq1nFXr4j1RLUok7akGfw_CJ0uhn-tHNFj1pRT3LyfArM8B8ddeo_zoZ62kVhffHIwQgZDemdkCRBYXYx'
    }
});


