// Import createClient from '@sanity/client' instead of the default export sanityClient
import { createClient } from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
}

// Use createClient to create the Sanity client instance
const client = createClient(options);

export default client;
