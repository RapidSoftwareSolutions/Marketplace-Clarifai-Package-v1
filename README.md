# Clarifai Package
Build amazing apps with the world’s best image and video recognition API.
* Domain: clarifai.com
* Credentials: accessToken

## How to get credentials: 
0. Signup in [clarifai.com](https://clarifai.com)
1. Go to [Developer Dashboard](https://developer.clarifai.com/account/applications/)
2. Press **Create a New Application** button
3. Copy and save your `client_id and` and `client_secret`
4. Press **Generate Access Token** button or use [getAccessToken](#getAccessToken) method.

## TOC: 
* [getAccessToken](#getAccessToken)
* [getTags](#getTags)
* [provideFeedback](#provideFeedback)
* [getDominantColors](#getDominantColors)
* [getInfo](#getInfo)
* [getLanguages](#getLanguages)
* [getUsage](#getUsage)
 
<a name="getAccessToken"/>
## Clarifai.getAccessToken
Authentication to the API is handled using OAuth2 client credentials. Each application you create has a unique Client ID and Client Secret which you will use to exchange for an Access Token. You then use this Access Token to make authorized API calls.

| Field       | Type  | Description
|-------------|-------|----------
| clientId    | String| Client Id This identifies which application is trying to access the API. This is unique and generated once for each application in your account..
| clientSecret| String| This provides security when authorizing with the API. This is unique and generated once for each application in your account.

<a name="getTags"/>
## Clarifai.getTags
The tag endpoint is used to tag the contents of your images or videos. Data is input into our system, processed with our deep learning platform and a list of tags is returned. Typical process times are in the milliseconds.

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.
| urls         | JSON       | Files url.
| file         | String     | You can also upload an image or video from your local filesystem.
| model        | String     | If you'd like to get tags for an image or video using a different model, you can do so by passing in a model parameter. If you omit this parameter, the API will use the default model for your application.
| tagsLanguage | String     | By default this API call returns tags in English. You can change this default setting on the applications page or can pass in a language parameter
| selectClasses| String     | If you'd like to get the probability of a certain tag or tags, you can specify them in the  request using the select_classes parameter.

<a name="provideFeedback"/>
## Clarifai.provideFeedback
The feedback endpoint provides the ability to give feedback to the API about images and videos that were previously tagged. This is typically used to correct errors made by our deep learning platform. Each piece of feedback helps our system learn better. Please try and provide feedback whenever you see errors.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.
| docIds          | String     | Valid docids or url.
| url             | String     | valid url or docids.
| addTags         | String     | Tags to add.
| removeTags      | String     | Tags to remove.
| similarDocids   | String     | Comma-separated list of url or docids that are similar to the input.
| dissimilarDocids| String     | Comma-separated list of url or docids that are dissimilar to the input.
| searchClick     | String     | Comma-separated list of search terms that generated the search result.

<a name="getDominantColors"/>
## Clarifai.getDominantColors
(BETA) The color endpoint is used to retrieve the dominant colors present in your images or videos. Color values are returned in the hex format. A density value is also returned to let you know how much of the color is present. In addition, colors are also mapped to their closest W3C counterparts.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.
| url        | String     | File url.

<a name="getInfo"/>
## Clarifai.getInfo
The info endpoint returns the current API details as well as any usage limits your account has.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.

<a name="getLanguages"/>
## Clarifai.getLanguages
The info/languages endpoint returns all the languages that the tag API call supports.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.

<a name="getUsage"/>
## Clarifai.getUsage
The usage endpoint returns your API usage for the current month and hour.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis.

