import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div className='w-full md:w-4/5 md:mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-3'>


                <div className="max-w-screen rounded overflow-hidden shadow-lg border">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black" >What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                        <p className="text-black text-base p-5">
                            <strong>Access Token:</strong>
                            <br></br>An access token is a digitally signed JSON object that contains information about the authenticated user and their access rights. It is a short-lived token used to authenticate and authorize requests to protected resources on the server. The access token is sent with each request, usually in the Authorization header or as a query parameter. The server verifies the token's validity and integrity to grant or deny access to the requested resource. <br />
                            <strong>How it works:</strong> <br />
                            Access tokens contain user information and are short-lived, used for individual requests to protected resources. They are stored securely on the client-side using options like localStorage, sessionStorage, cookies, or memory. <br /><br />
                            <strong>Refresh Token:</strong>
                            <br></br>A refresh token is a long-lived token used to obtain a new access token when the current access token expires or becomes invalid. It is used to refresh the user's authentication session without requiring them to provide their credentials again. When the access token expires, the client can send the refresh token to a token endpoint on the server to obtain a new access token. This process helps maintain the user's session and avoids frequent reauthentication. Refresh tokens are typically securely stored on the client-side and have a longer lifespan than access tokens. <br />
                            <strong>How it works:</strong> <br />
                            Refresh tokens are long-lived and used to obtain new access tokens when they expire. They help maintain user sessions without requiring re-authentication. Refresh tokens are securely stored on the client-side and sent to the server's token endpoint to acquire new access tokens.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="max-w-screen rounded overflow-hidden shadow-lg border">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black" >Compare SQL and NoSQL databases?</div>
                        <p className="text-black text-base p-5">
                            <strong>SQL:</strong> SQL databases follow a structured data model known as the relational model. Data is organized into tables with predefined schemas, and relationships between tables are established using foreign keys. <br />SQL databases use Structured Query Language (SQL) as the standard language for defining and manipulating the data. SQL provides a powerful and standardized way to query and manage relational data. <br />
                            <strong>NoSQL:</strong> <br /> NoSQL databases employ various data models such as key-value, document, columnar, or graph. They are schema-flexible, allowing for dynamic and unstructured data. <br /> NoSQL databases use different query languages or APIs based on their data models. For example, key-value databases use simple get/put operations, document databases use JSON-like queries, and graph databases use graph traversal languages.
                        </p>
                    </div>
                </div>
                <div className="max-w-screen rounded overflow-hidden shadow-lg border">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black" >What is express js? What is Nest JS?</div>
                        <p className="text-black text-base p-5">
                            <strong>Express.js</strong>
                            <br></br>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware implementation, and integrating with various modules and libraries. It allows developers to quickly create server-side applications using JavaScript or TypeScript.<br></br>
                            <strong>Nest.js</strong><br></br>
                            NestJS is a progressive, extensible, and TypeScript-based web application framework built on top of Node.js. It follows the architectural principles of Angular and combines elements of object-oriented programming, functional programming, and reactive programming. NestJS provides a solid foundation for building scalable and maintainable server-side applications. It offers features like dependency injection, declarative modules, decorators, middleware, and a powerful command-line interface. NestJS promotes modular and testable code structure and supports various transport layers such as HTTP, WebSockets, gRPC, and more.
                        </p>
                    </div>
                </div>
                <div className="max-w-screen rounded overflow-hidden shadow-lg border">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-black" >What is MongoDB aggregate and how does it work ?</div>
                        <p className="text-black text-base p-5">
                            MongoDB's aggregate is a feature that allows you to perform advanced data processing and analysis operations on your MongoDB collections. It works by taking an array of pipeline stages, where each stage represents a specific operation. These stages can include filtering, grouping, sorting, joining, and computing aggregate values. The documents pass through these stages sequentially, allowing you to manipulate and reshape the data as needed. The result of the aggregation is returned as a cursor, which can be iterated or further processed. Aggregate provides a powerful and flexible way to extract insights and perform complex data operations in MongoDB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;