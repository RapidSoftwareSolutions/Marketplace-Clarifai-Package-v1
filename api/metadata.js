module.exports.do = (req, res) => {
res.status(200).send({
  "package": "Clarifai",
  "tagline": "Clarifai API Package",
  "description": "Build amazing apps with the world’s best image and video recognition API.",
  "image": "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAkRAAAAJDc4ZDU2MjRmLWI2N2MtNGI3YS05NDhiLWVjMmU4N2IzOGE3OA.png",
  "repo": "https://github.com/RapidSoftwareSolutions/",
  "accounts": {
    "domain": "clarifai.com",
    "credentials": [
      "accessToken"
    ]
  },
  "blocks": [
    {
      "name": "getAccessToken",
      "description": "Authentication to the API is handled using OAuth2 client credentials. Each application you create has a unique Client ID and Client Secret which you will use to exchange for an Access Token. You then use this Access Token to make authorized API calls.",
      "args": [
        {
          "name": "clientId",
          "type": "String",
          "info": "Client Id This identifies which application is trying to access the API. This is unique and generated once for each application in your account.."
        },
        {
          "name": "clientSecret",
          "type": "String",
          "info": "This provides security when authorizing with the API. This is unique and generated once for each application in your account."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getTags",
      "description": "The tag endpoint is used to tag the contents of your images or videos. Data is input into our system, processed with our deep learning platform and a list of tags is returned. Typical process times are in the milliseconds.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        },
        {
          "name": "urls",
          "type": "JSON",
          "info": "Files url."
        },
        {
          "name": "file",
          "type": "String",
          "info": "You can also upload an image or video from your local filesystem."
        },
        {
          "name": "model",
          "type": "String",
          "info": "If you'd like to get tags for an image or video using a different model, you can do so by passing in a model parameter. If you omit this parameter, the API will use the default model for your application."
        },
        {
          "name": "tagsLanguage",
          "type": "String",
          "info": "By default this API call returns tags in English. You can change this default setting on the applications page or can pass in a language parameter"
        },
        {
          "name": "selectClasses",
          "type": "String",
          "info": "If you'd like to get the probability of a certain tag or tags, you can specify them in the  request using the select_classes parameter."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "provideFeedback",
      "description": "The feedback endpoint provides the ability to give feedback to the API about images and videos that were previously tagged. This is typically used to correct errors made by our deep learning platform. Each piece of feedback helps our system learn better. Please try and provide feedback whenever you see errors.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        },
        {
          "name": "docIds",
          "type": "String",
          "info": "Valid docids or url."
        },
        {
          "name": "url",
          "type": "String",
          "info": "valid url or docids."
        },
        {
          "name": "addTags",
          "type": "String",
          "info": "Tags to add."
        },
        {
          "name": "removeTags",
          "type": "String",
          "info": "Tags to remove."
        },
        {
          "name": "similarDocids",
          "type": "String",
          "info": "Comma-separated list of url or docids that are similar to the input."
        },
        {
          "name": "dissimilarDocids",
          "type": "String",
          "info": "Comma-separated list of url or docids that are dissimilar to the input."
        },
        {
          "name": "searchClick",
          "type": "String",
          "info": "Comma-separated list of search terms that generated the search result."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getDominantColors",
      "description": "(BETA) The color endpoint is used to retrieve the dominant colors present in your images or videos. Color values are returned in the hex format. A density value is also returned to let you know how much of the color is present. In addition, colors are also mapped to their closest W3C counterparts.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        },
        {
          "name": "url",
          "type": "String",
          "info": "File url."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getInfo",
      "description": "The info endpoint returns the current API details as well as any usage limits your account has.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getLanguages",
      "description": "The info/languages endpoint returns all the languages that the tag API call supports.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getUsage",
      "description": "The usage endpoint returns your API usage for the current month and hour.",
      "args": [
        {
          "name": "accessToken",
          "type": "credentials",
          "info": "This is used to authorize your access to the API. Access tokens expire regularly and must be renewed on an ongoing basis."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    }
  ]
})
};