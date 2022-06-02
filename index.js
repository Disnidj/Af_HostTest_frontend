var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$axios = require("axios");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}









class $1af2306d0f141a54$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    //initialize constructor to pass the props
    constructor(props){
        super(props);
        this.state = {
            //initializing an array 
            GetAllposts: []
        };
    }
    //calling the method after componenets render to the page
    componentDidMount() {
        this.retrievePanelEve();
    }
    //get request method
    retrievePanelEve() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetailssuper").then((res)=>{
            console.log(res.data);
            if (res.data.success) {
                this.setState({
                    GetAllposts: res.data.existingDocs
                });
                console.log(this.state.GetAllposts);
            }
        });
    }
    //delete function
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/SuperviEve/delete/${id}`).then((res)=>{
            this.retrievePanelEve();
        });
        alert("Deleted succesfully");
    };
    //search data according to name
    filterData(GetAllposts, searchKey) {
        const result = GetAllposts.filter((CheckOnePEv)=>CheckOnePEv.Groupname.toLowerCase().includes(searchKey) || CheckOnePEv.Groupname.includes(searchKey)
        );
        this.setState({
            GetAllposts: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetailssuper").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingDocs, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                style: {
                                    background: '#000080',
                                    width: "800px",
                                    color: 'white'
                                },
                                children: " Document Evaluvation By Supervisor"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-lg-3 my-2 mb-2",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                style: {
                                    padding: '17px 50px',
                                    marginLeft: '800px'
                                },
                                type: "search",
                                placeholder: "Enter the Group Name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                style: {
                                    width: '800px',
                                    marginLeft: '800px'
                                },
                                children: "  *you can search the group here"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                        className: "table",
                        style: {
                            width: '1000px',
                            marginLeft: "250px"
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                style: {
                                    fontSize: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "No"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: " Group Name "
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Total Marks"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                children: this.state.GetAllposts.map((GetAllposts, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "row",
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        href: `/CheckOneSupervEve/${GetAllposts._id}`,
                                                        style: {
                                                            TextDecoration: 'none'
                                                        },
                                                        children: [
                                                            GetAllposts.Groupname,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                children: GetAllposts.Total
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        className: "btn btn-warning",
                                                        href: `/SupervevaluationEdit/${GetAllposts._id}`,
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                                className: "fas fa-edit"
                                                            }),
                                                            "\xa0 Edit"
                                                        ]
                                                    }),
                                                    "\xa0",
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        className: "btn btn-danger",
                                                        href: "#",
                                                        onClick: ()=>this.onDelete(GetAllposts._id)
                                                        ,
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                                className: "far fa-trash-alt"
                                                            }),
                                                            "\xa0 Delete"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px',
                                            backgroundColor: "#0147ab"
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/newEvaluationSuperv",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Evluate New Group "
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '760px',
                                            padding: '8px 8px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            href: "/EveHome",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#3895d3',
                                                color: 'white',
                                                fontSize: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "far fa-arrow-alt-circle-left"
                                                }),
                                                "\xa0Go Back"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}





class $3036718d29464a66$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            Groupname: "",
            title: "",
            abstract: "",
            problemIdentified: "",
            clearyStated: "",
            references: "",
            modelframework: "",
            MethoDescription: "",
            appro: "",
            dataCollect: "",
            dataAnalys: "",
            conclusionClarity: "",
            relevent: "",
            clearWritten: "",
            logic: "",
            Total: "",
            Comment: ""
        };
    }
    //handleChange = ({
    //target: { value, name }}) => 
    //this.setState({ [name]: value
    // })
    handleChange = (e)=>{
        const { name: name , value: value  } = e.target;
        let nam = e.target.name;
        let val = e.target.value;
        //validation for title
        if (nam === "title") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "title") {
            if (val > 5) alert("Invalid mark!!");
        }
        //validation for abstract 
        if (nam === "abstract") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "abstract") {
            if (val > 5) alert("Invalid mark!!");
        }
        //validation for problem identify
        if (nam === "problemIdentified") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "problemIdentified") {
            if (val > 5) alert("Invalid mark!!");
        }
        //clearly stated validation
        if (nam === "clearyStated") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "clearyStated") {
            if (val > 5) alert("Invalid mark!!");
        }
        //references validation
        if (nam === "references") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "references") {
            if (val > 5) alert("Invalid mark!!");
        }
        //model framework validation
        if (nam === "modelframework") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "modelframework") {
            if (val > 5) alert("Invalid mark!!");
        }
        //description validation
        if (nam === "MethoDescription") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "MethoDescription") {
            if (val > 5) alert("Invalid mark!!");
        }
        //appropriate validation
        if (nam === "appro") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "appro") {
            if (val > 5) alert("Invalid mark!!");
        }
        //data collection validation
        if (nam === "dataCollect") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "dataCollect") {
            if (val > 5) alert("Invalid mark!!");
        }
        //data analysis validation
        if (nam === "dataAnalys") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "dataAnalys") {
            if (val > 15) alert("Invalid mark!!");
        }
        //conclusion clearity
        if (nam === "conclusionClarity") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "conclusionClarity") {
            if (val > 10) alert("Invalid mark!!");
        }
        //relevant validation
        if (nam === "relevent") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "relevent") {
            if (val > 10) alert("Invalid mark!!");
        }
        //clearly written validation
        if (nam === "clearWritten") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "clearWritten") {
            if (val > 10) alert("Invalid mark!!");
        }
        //logic validation
        if (nam === "logic") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "logic") {
            if (val > 10) alert("Invalid mark!!");
        }
        //total mark validation
        if (nam === "Total") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "Total") {
            if (val > 100) alert("Invalid mark!!");
        }
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    onSubmit = (e)=>{
        e.preventDefault();
        const { Groupname: Groupname , title: title , abstract: abstract , problemIdentified: problemIdentified , clearyStated: clearyStated , references: references , modelframework: modelframework , MethoDescription: MethoDescription , appro: appro , dataCollect: dataCollect , dataAnalys: dataAnalys , conclusionClarity: conclusionClarity , relevent: relevent , clearWritten: clearWritten , logic: logic , Total: Total , Comment: Comment  } = this.state;
        const data = {
            Groupname: Groupname,
            title: title,
            abstract: abstract,
            problemIdentified: problemIdentified,
            clearyStated: clearyStated,
            references: references,
            modelframework: modelframework,
            MethoDescription: MethoDescription,
            appro: appro,
            dataCollect: dataCollect,
            dataAnalys: dataAnalys,
            conclusionClarity: conclusionClarity,
            relevent: relevent,
            clearWritten: clearWritten,
            logic: logic,
            Total: Total,
            Comment: Comment
        };
        console.log(data);
        //save data
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/SuperviEve/savePost", data).then((res)=>{
            if (res.data.success) {
                this.setState({
                    Groupname: "",
                    title: "",
                    abstract: "",
                    problemIdentified: "",
                    clearyStated: "",
                    references: "",
                    modelframework: "",
                    MethoDescription: "",
                    appro: "",
                    dataCollect: "",
                    dataAnalys: "",
                    conclusionClarity: "",
                    relevent: "",
                    clearWritten: "",
                    logic: "",
                    Total: "",
                    Comment: ""
                });
                alert("You are saving the details");
            }
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            className: "edit",
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "col-md-8 mt-4 mx-auto",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        style: {
                            height: '80px',
                            width: '100%',
                            backgroundColor: "#000080",
                            marginTop: '-20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                style: {
                                    color: 'white',
                                    textAlign: 'center'
                                },
                                children: "Supervisor Evaluation Form- Document"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "btn btn-success",
                                style: {
                                    marginLeft: '910px',
                                    padding: '8px 8px',
                                    backgroundColor: '#3895d3',
                                    marginBottom: "10px"
                                },
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                    href: "/supervEveHome",
                                    style: {
                                        textDecoration: 'none',
                                        backgroundColor: '#3895d3',
                                        color: 'white',
                                        fontSize: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                            class: "far fa-arrow-alt-circle-left"
                                        }),
                                        "\xa0Go Back"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                className: "row g-3",
                                style: {
                                    backgroundColor: "#ebecf0"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Group Name : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "Groupname",
                                                value: this.state.Groupname,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: " Backgroud (20 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Title : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "title",
                                                value: this.state.title,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Abstract : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "abstract",
                                                value: this.state.abstract,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Problem Identified Clearly : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "problemIdentified",
                                                value: this.state.problemIdentified,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Research Area Clearly Stated : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "email",
                                                className: "form-control",
                                                name: "clearyStated",
                                                value: this.state.clearyStated,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Literature Review (10 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "References : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "references",
                                                value: this.state.references,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Model Framwork : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "modelframework",
                                                value: this.state.modelframework,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Methodology (15 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Description : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "MethoDescription",
                                                value: this.state.MethoDescription,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Appropriation : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "appro",
                                                value: this.state.appro,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Data Collection Methods : (5 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "dataCollect",
                                                value: this.state.dataCollect,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Result and Analysis of the Findings (15 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Data Analsing Methods : (15 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "dataAnalys",
                                                value: this.state.dataAnalys,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Conclusion (20 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Clearity of Conclusion : (10 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "conclusionClarity",
                                                value: this.state.conclusionClarity,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Relevent : (10 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "relevent",
                                                value: this.state.relevent,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Report Writing (20 Marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Clearly Written : (10 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "clearWritten",
                                                value: this.state.clearWritten,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Logical Organized : (10 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "logic",
                                                value: this.state.logic,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Total Mark : (100 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "Total",
                                                value: this.state.Total,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Comment : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "Comment",
                                                value: this.state.Comment,
                                                placeholder: "Give a feedback comment",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn btn-dark btn-lg",
                                                style: {
                                                    backgroundColor: "#0147ab"
                                                },
                                                onClick: this.onSubmit,
                                                href: "/",
                                                children: " Submit the Result"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn-success",
                                                style: {
                                                    marginLeft: '890px',
                                                    padding: '8px 8px',
                                                    backgroundColor: '#3895d3',
                                                    marginBottom: "10px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                    href: "/supervEveHome",
                                                    style: {
                                                        textDecoration: 'none',
                                                        backgroundColor: '#3895d3',
                                                        color: 'white',
                                                        fontSize: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                            class: "far fa-arrow-alt-circle-left"
                                                        }),
                                                        "\xa0Go Back"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
}







function $a5d9a153b330a4e1$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [title, settitle] = $ltMAx$react.useState("");
    const [abstract, setabstract] = $ltMAx$react.useState("");
    const [problemIdentified, setproblemIdentified] = $ltMAx$react.useState("");
    const [clearyStated, setclearyStated] = $ltMAx$react.useState("");
    const [references, setreferences] = $ltMAx$react.useState("");
    const [modelframework, setmodelframework] = $ltMAx$react.useState("");
    const [MethoDescription, setMethoDescription] = $ltMAx$react.useState("");
    const [appro, setappro] = $ltMAx$react.useState("");
    const [dataCollect, setdataCollect] = $ltMAx$react.useState("");
    const [dataAnalys, setdataAnalys] = $ltMAx$react.useState("");
    const [conclusionClarity, setconclusionClarity] = $ltMAx$react.useState("");
    const [relevent, setrelevent] = $ltMAx$react.useState("");
    const [clearWritten, setclearWritten] = $ltMAx$react.useState("");
    const [logic, setlogic] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const [Comment, setComment] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        title: "",
        abstract: "",
        problemIdentified: "",
        clearyStated: "",
        references: "",
        modelframework: "",
        MethoDescription: "",
        appro: "",
        dataCollect: "",
        dataAnalys: "",
        conclusionClarity: "",
        relevent: "",
        clearWritten: "",
        logic: "",
        Total: "",
        Comment: ""
    });
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetailsuper/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            settitle(res.data.getOneDetail.title);
            setabstract(res.data.getOneDetail.abstract);
            setproblemIdentified(res.data.getOneDetail.problemIdentified);
            setclearyStated(res.data.getOneDetail.clearyStated);
            setreferences(res.data.getOneDetail.references);
            setmodelframework(res.data.getOneDetail.modelframework);
            setMethoDescription(res.data.getOneDetail.MethoDescription);
            setappro(res.data.getOneDetail.appro);
            setdataCollect(res.data.getOneDetail.dataCollect);
            setdataAnalys(res.data.getOneDetail.dataAnalys);
            setconclusionClarity(res.data.getOneDetail.conclusionClarity);
            setrelevent(res.data.getOneDetail.relevent);
            setclearWritten(res.data.getOneDetail.clearWritten);
            setlogic(res.data.getOneDetail.logic);
            setTotal(res.data.getOneDetail.Total);
            setComment(res.data.getOneDetail.Comment);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    style: {
                        height: '80px',
                        width: '100%',
                        backgroundColor: "#000080",
                        marginTop: '-20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                            style: {
                                color: 'white',
                                textAlign: 'center'
                            },
                            children: "Supervisor Evaluation Sheet- Document"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        marginLeft: '400px'
                    },
                    children: Groupname
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    className: "table",
                    style: {
                        border: '1px solid black',
                        width: '50%',
                        marginLeft: '400px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "DESCRIPTION"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "MARKS"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Backgroud  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Title (5 mark)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Abstract (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: abstract
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Problem Identified Clearly (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: problemIdentified
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Research Area Clearly Stated (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: clearyStated
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Literature Review  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "References (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: references
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Model Framwork (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: modelframework
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Methodology "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Description (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: MethoDescription
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Appropriation (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: appro
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Data Collection Methods (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: dataCollect
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Result and Analysis Of Findings  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Data Analsing Methods (15 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: dataAnalys
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Conclusion  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Clear Of Conclusion (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: conclusionClarity
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Relevent (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: relevent
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Report Writing  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Clearly Writing (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: clearWritten
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Logical Organized (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: logic
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: "Total Mark (out of 100)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: Total
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: "Comments or Feedback"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: Comment
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '700px',
                        padding: '10px 10px',
                        backgroundColor: '#3895d3'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/supervEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}







function $1e0ecaf08d58571f$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [title, settitle] = $ltMAx$react.useState("");
    const [abstract, setabstract] = $ltMAx$react.useState("");
    const [problemIdentified, setproblemIdentified] = $ltMAx$react.useState("");
    const [clearyStated, setclearyStated] = $ltMAx$react.useState("");
    const [references, setreferences] = $ltMAx$react.useState("");
    const [modelframework, setmodelframework] = $ltMAx$react.useState("");
    const [MethoDescription, setMethoDescription] = $ltMAx$react.useState("");
    const [appro, setappro] = $ltMAx$react.useState("");
    const [dataCollect, setdataCollect] = $ltMAx$react.useState("");
    const [dataAnalys, setdataAnalys] = $ltMAx$react.useState("");
    const [conclusionClarity, setconclusionClarity] = $ltMAx$react.useState("");
    const [relevent, setrelevent] = $ltMAx$react.useState("");
    const [clearWritten, setclearWritten] = $ltMAx$react.useState("");
    const [logic, setlogic] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const [Comment, setComment] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        title: "",
        abstract: "",
        problemIdentified: "",
        clearyStated: "",
        references: "",
        modelframework: "",
        MethoDescription: "",
        appro: "",
        dataCollect: "",
        dataAnalys: "",
        conclusionClarity: "",
        relevent: "",
        clearWritten: "",
        logic: "",
        Total: "",
        Comment: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("data");
        const formData = new FormData();
        formData.append("Groupname", Groupname);
        formData.append("title", title);
        formData.append("abstract", abstract);
        formData.append("problemIdentified", problemIdentified);
        formData.append("clearyStated", clearyStated);
        formData.append("references", references);
        formData.append("modelframework", modelframework);
        formData.append("MethoDescription", MethoDescription);
        formData.append("appro", appro);
        formData.append("dataCollect", dataCollect);
        formData.append("dataAnalys", dataAnalys);
        formData.append("conclusionClarity", conclusionClarity);
        formData.append("relevent", relevent);
        formData.append("clearWritten", clearWritten);
        formData.append("logic", logic);
        formData.append("Total", Total);
        formData.append("Comment", Comment);
        setGroupname("");
        settitle("");
        setabstract("");
        setproblemIdentified("");
        setclearyStated("");
        setreferences("");
        setmodelframework("");
        setMethoDescription("");
        setappro("");
        setdataCollect("");
        setdataAnalys("");
        setconclusionClarity("");
        setrelevent("");
        setclearWritten("");
        setlogic("");
        setTotal("");
        setComment("");
        console.log(formData.get('Groupname'));
        paneleve.Groupname = formData.get('Groupname');
        paneleve.title = formData.get('title');
        paneleve.abstract = formData.get('abstract');
        paneleve.problemIdentified = formData.get('problemIdentified');
        paneleve.clearyStated = formData.get('clearyStated');
        paneleve.references = formData.get('references');
        paneleve.modelframework = formData.get('modelframework');
        paneleve.MethoDescription = formData.get('MethoDescription');
        paneleve.appro = formData.get('appro');
        paneleve.dataCollect = formData.get('dataCollect');
        paneleve.dataAnalys = formData.get('dataAnalys');
        paneleve.conclusionClarity = formData.get('conclusionClarity');
        paneleve.relevent = formData.get('relevent');
        paneleve.clearWritten = formData.get('clearWritten');
        paneleve.logic = formData.get('logic');
        paneleve.Total = formData.get('Total');
        paneleve.Comment = formData.get('Comment');
        console.log(paneleve);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/SuperviEve/update/${id?.id}`, paneleve).then((res)=>{
            console.log("return data", res);
            alert("Update Successfull!!");
        }).catch((err)=>{
            alert("update failed");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetailsuper/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            settitle(res.data.getOneDetail.title);
            setabstract(res.data.getOneDetail.abstract);
            setproblemIdentified(res.data.getOneDetail.problemIdentified);
            setclearyStated(res.data.getOneDetail.clearyStated);
            setreferences(res.data.getOneDetail.references);
            setmodelframework(res.data.getOneDetail.modelframework);
            setMethoDescription(res.data.getOneDetail.MethoDescription);
            setappro(res.data.getOneDetail.appro);
            setdataCollect(res.data.getOneDetail.dataCollect);
            setdataAnalys(res.data.getOneDetail.dataAnalys);
            setconclusionClarity(res.data.getOneDetail.conclusionClarity);
            setrelevent(res.data.getOneDetail.relevent);
            setclearWritten(res.data.getOneDetail.clearWritten);
            setlogic(res.data.getOneDetail.logic);
            setTotal(res.data.getOneDetail.Total);
            setComment(res.data.getOneDetail.Comment);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "col-md-8 mt-4 mx-auto",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Document Evaluation Sheet Edit"
                        }),
                        "  "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '910px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        marginBottom: "10px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/supervEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                    className: "row g-3",
                    style: {
                        backgroundColor: "#ebecf0"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Group Name : "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Groupname",
                                    onChange: (e)=>setGroupname(e.target.value)
                                    ,
                                    value: Groupname
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Backgroud (20 Marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Title : (5 marks) "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "title",
                                    onChange: (e)=>settitle(e.target.value)
                                    ,
                                    value: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Abstract : (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "abstract",
                                    onChange: (e)=>setabstract(e.target.value)
                                    ,
                                    value: abstract
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Problem Identified Clearly : (5 marks) "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "problemIdentified",
                                    onChange: (e)=>setproblemIdentified(e.target.value)
                                    ,
                                    value: problemIdentified
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Research Area Clearly Stated : (5 marks) "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "clearyStated",
                                    onChange: (e)=>setclearyStated(e.target.value)
                                    ,
                                    value: clearyStated
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Literature Review (10 Marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "References"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "references",
                                    onChange: (e)=>setreferences(e.target.value)
                                    ,
                                    value: references
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Model Framwork : (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "modelframework",
                                    onChange: (e)=>setmodelframework(e.target.value)
                                    ,
                                    value: modelframework
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Methodology (15 Marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Description : (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "MethoDescription",
                                    onChange: (e)=>setMethoDescription(e.target.value)
                                    ,
                                    value: MethoDescription
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Appropriation : (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "appro",
                                    onChange: (e)=>setappro(e.target.value)
                                    ,
                                    value: appro
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Data Collection Methods : (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "dataCollect",
                                    onChange: (e)=>setdataCollect(e.target.value)
                                    ,
                                    value: dataCollect
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Result and Analysis of the Findings (15 Marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Data Analsing Methods : (15 marks) "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "dataAnalys",
                                    onChange: (e)=>setdataAnalys(e.target.value)
                                    ,
                                    value: dataAnalys
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Conclusion "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Clearity of Conclusion : (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "conclusionClarity",
                                    onChange: (e)=>setconclusionClarity(e.target.value)
                                    ,
                                    value: conclusionClarity
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Relevent : (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "relevent",
                                    onChange: (e)=>setrelevent(e.target.value)
                                    ,
                                    value: relevent
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Report Writing (20 Marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Clearly Written : (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "clearWritten",
                                    onChange: (e)=>setclearWritten(e.target.value)
                                    ,
                                    value: clearWritten
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Logical Organized : (10 marks) "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "logic",
                                    onChange: (e)=>setlogic(e.target.value)
                                    ,
                                    value: logic
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Total Mark : (100 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Total",
                                    onChange: (e)=>setTotal(e.target.value)
                                    ,
                                    value: Total
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Comment"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Comment",
                                    onChange: (e)=>setComment(e.target.value)
                                    ,
                                    value: Comment
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                    className: "btn btn-success",
                    type: "submit",
                    style: {
                        marginTop: '15px',
                        width: "250px",
                        marginLeft: "370px",
                        backgroundColor: "#0147ab"
                    },
                    onClick: (e)=>changeOnClick(e)
                    ,
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            className: "far fa-check-square"
                        }),
                        "\xa0 Save"
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '890px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        marginBottom: "10px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/supervEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}




var $e5db8dde939bce83$exports = {};
$e5db8dde939bce83$exports = new URL("Evaluation.b2985d36.jpg", "file:" + __filename).toString();


class $04a304321dd7eef7$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Evaluation Home"
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '10px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        width: '200px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/adminHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginLeft: '250px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                        src: (/*@__PURE__*/$parcel$interopDefault($e5db8dde939bce83$exports)),
                        class: "mx-auto",
                        alt: "evaluation",
                        width: "1100",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                "  ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            className: "btn btn-success",
                                            style: {
                                                marginLeft: '250px',
                                                backgroundColor: "#0147ab",
                                                width: '350px'
                                            },
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: "/supervEveHome",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    fontSize: "16px"
                                                },
                                                children: " Supervisor Evaluation "
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        " ",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            className: "btn btn-success",
                                            style: {
                                                marginLeft: '450px',
                                                backgroundColor: "#0147ab",
                                                width: '350px'
                                            },
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: "/panelEveHome",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    fontSize: "16px"
                                                },
                                                children: " Panel Evaaluation "
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        " ",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/UploadNaviAdmin",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white'
                                            },
                                            children: " Admin Document Upload  "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                    className: "btn btn-success",
                                    style: {
                                        marginLeft: '250px'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        href: "/TempNavbar",
                                        style: {
                                            textDecoration: 'none',
                                            color: 'white'
                                        },
                                        children: " Templates Submittions  "
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                " ",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $61434352276ed6a2$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    //initialize constructor to pass the props
    constructor(props){
        super(props);
        this.state = {
            //initializing an array 
            GetAllposts: []
        };
    }
    //calling the method after componenets render to the page
    componentDidMount() {
        this.retrievePanelEve();
    }
    //get request method
    retrievePanelEve() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetails").then((res)=>{
            console.log(res.data);
            if (res.data.success) {
                this.setState({
                    GetAllposts: res.data.existingDocs
                });
                console.log(this.state.GetAllposts);
            }
        });
    }
    //delete function
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/stdDetails/delete/${id}`).then((res)=>{
            this.retrievePanelEve();
        });
        alert("Deleted succesfully");
    };
    //search data according to name
    filterData(GetAllposts, searchKey) {
        const result = GetAllposts.filter((CheckOnePEv)=>CheckOnePEv.Groupname.toLowerCase().includes(searchKey) || CheckOnePEv.Groupname.includes(searchKey)
        );
        this.setState({
            GetAllposts: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetails").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingDocs, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                style: {
                                    background: '#000080',
                                    width: "800px",
                                    color: 'white'
                                },
                                children: " Presentation Evaluvation By Panel"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-lg-3 my-2 mb-2",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                style: {
                                    padding: '17px 50px',
                                    marginLeft: '800px'
                                },
                                type: "search",
                                placeholder: "Enter the Group Name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                style: {
                                    width: '800px',
                                    marginLeft: '800px'
                                },
                                children: "  *you can search the group here"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                        className: "table",
                        style: {
                            width: '1000px',
                            marginLeft: "250px"
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                style: {
                                    fontSize: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "No"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: " Group Name "
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Total Marks"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                children: this.state.GetAllposts.map((GetAllposts, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "row",
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        href: `/CheckOnePanelEve/${GetAllposts._id}`,
                                                        style: {
                                                            TextDecoration: 'none'
                                                        },
                                                        children: [
                                                            GetAllposts.Groupname,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                children: GetAllposts.Total
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        className: "btn btn-warning",
                                                        href: `/PanelevaluationEdit/${GetAllposts._id}`,
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                                className: "fas fa-edit"
                                                            }),
                                                            "\xa0 Edit"
                                                        ]
                                                    }),
                                                    "\xa0",
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        className: "btn btn-danger",
                                                        href: "#",
                                                        onClick: ()=>this.onDelete(GetAllposts._id)
                                                        ,
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                                className: "far fa-trash-alt"
                                                            }),
                                                            "\xa0 Delete"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px',
                                            backgroundColor: "#0147ab"
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/newEvaluationPanel",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Evluate New Group "
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '760px',
                                            padding: '8px 8px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            href: "/EveHome",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#3895d3',
                                                color: 'white',
                                                fontSize: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "far fa-arrow-alt-circle-left"
                                                }),
                                                "\xa0Go Back"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}







function $73093b13fcb70fcb$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [introduction, setintroduction] = $ltMAx$react.useState("");
    const [organization, setorganization] = $ltMAx$react.useState("");
    const [voiceInflection, setvoiceInflection] = $ltMAx$react.useState("");
    const [voiceRate, setvoiceRate] = $ltMAx$react.useState("");
    const [tools, settools] = $ltMAx$react.useState("");
    const [eyeContact, seteyeContact] = $ltMAx$react.useState("");
    const [groupArrange, setgroupArrange] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        introduction: "",
        organization: "",
        voiceInflection: "",
        voiceRate: "",
        tools: "",
        eyeContact: "",
        groupArrange: "",
        Total: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("data");
        const formData = new FormData();
        formData.append("Groupname", Groupname);
        formData.append("introduction", introduction);
        formData.append("organization", organization);
        formData.append("voiceInflection", voiceInflection);
        formData.append("voiceRate", voiceRate);
        formData.append("tools", tools);
        formData.append("eyeContact", eyeContact);
        formData.append("groupArrange", groupArrange);
        formData.append("Total", Total);
        setGroupname("");
        setintroduction("");
        setorganization("");
        setvoiceInflection("");
        setvoiceRate("");
        settools("");
        seteyeContact("");
        setgroupArrange("");
        setTotal("");
        console.log(formData.get('Groupname'));
        paneleve.Groupname = formData.get('Groupname');
        paneleve.introduction = formData.get('introduction');
        paneleve.organization = formData.get('organization');
        paneleve.voiceInflection = formData.get('voiceInflection');
        paneleve.voiceRate = formData.get('voiceRate');
        paneleve.tools = formData.get('tools');
        paneleve.eyeContact = formData.get('eyeContact');
        paneleve.groupArrange = formData.get('groupArrange');
        paneleve.Total = formData.get('Total');
        console.log(paneleve);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/stdDetail/update/${id?.id}`, paneleve).then((res)=>{
            console.log("return data", res);
            alert("Update Successfull!!");
        }).catch((err)=>{
            alert("update failed");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetail/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            setintroduction(res.data.getOneDetail.introduction);
            setorganization(res.data.getOneDetail.organization);
            setvoiceInflection(res.data.getOneDetail.voiceInflection);
            setvoiceRate(res.data.getOneDetail.voiceRate);
            settools(res.data.getOneDetail.tools);
            seteyeContact(res.data.getOneDetail.eyeContact);
            setgroupArrange(res.data.getOneDetail.groupArrange);
            setTotal(res.data.getOneDetail.Total);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "col-md-8 mt-4 mx-auto",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Presentation Evaluation Sheet Edit"
                        }),
                        "  "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '890px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        marginBottom: "10px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/panelEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                    className: "row g-3",
                    style: {
                        backgroundColor: "#ebecf0"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Group Name"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Groupname",
                                    onChange: (e)=>setGroupname(e.target.value)
                                    ,
                                    value: Groupname
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Introduction : (15 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Aprropriately introduced himself/ herself, the topic to be presented, and clearly explained objectives of the presentation"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "introduction",
                                    onChange: (e)=>setintroduction(e.target.value)
                                    ,
                                    value: introduction
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Organization : (15 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " The presentation is organized in a logical manner"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "organization",
                                    onChange: (e)=>setorganization(e.target.value)
                                    ,
                                    value: organization
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Voice : (20 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("label", {
                                    className: "form-label",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            children: " Volume and inflection was effective (10 marks)"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "voiceInflection",
                                    onChange: (e)=>setvoiceInflection(e.target.value)
                                    ,
                                    value: voiceInflection
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Rate of speech was appropriate (10 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "voiceRate",
                                    onChange: (e)=>setvoiceRate(e.target.value)
                                    ,
                                    value: voiceRate
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Tools : (20 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Audiovisual resources, visual aids, and / or handoutd were used appropriatly (not relied upon)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "tools",
                                    onChange: (e)=>settools(e.target.value)
                                    ,
                                    value: tools
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    children: "Audience Contact / Involvement : (30 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Eye Contact (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "eyeContact",
                                    onChange: (e)=>seteyeContact(e.target.value)
                                    ,
                                    value: eyeContact
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("label", {
                                    className: "form-label",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            children: "Arrange inside the group (15 marks)"
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "groupArrange",
                                    onChange: (e)=>setgroupArrange(e.target.value)
                                    ,
                                    value: groupArrange
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                    className: "form-label",
                                    children: "Total Mark : (100 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "Total",
                                    onChange: (e)=>setTotal(e.target.value)
                                    ,
                                    value: Total
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                    className: "btn btn-success",
                    type: "submit",
                    style: {
                        marginTop: '15px',
                        width: "250px",
                        marginLeft: "370px",
                        backgroundColor: "#0147ab"
                    },
                    onClick: (e)=>changeOnClick(e)
                    ,
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            className: "far fa-check-square"
                        }),
                        "\xa0 Save"
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '890px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        marginBottom: "10px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/panelEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}





class $31311cc7426deea7$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            Groupname: "",
            introduction: "",
            organization: "",
            voiceInflection: "",
            voiceRate: "",
            tools: "",
            eyeContact: "",
            groupArrange: "",
            Total: ""
        };
    }
    //handleChange = ({
    // target: { value, name }}) => 
    //this.setState({ [name]: value
    //})
    handleChange = (e)=>{
        const { name: name , value: value  } = e.target;
        let nam = e.target.name;
        let val = e.target.value;
        //validate introduction
        if (nam === "introduction") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "introduction") {
            if (val > 15) alert("Invalid mark!!");
        }
        //validate organization
        if (nam === "organization") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "organization") {
            if (val > 15) alert("Invalid mark!!");
        }
        // voice inflection validate
        if (nam === "voiceInflection") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "voiceInflection") {
            if (val > 10) alert("Invalid mark!!");
        }
        //voice rate validation
        if (nam === "voiceRate") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "voiceRate") {
            if (val > 10) alert("Invalid mark!!");
        }
        //tools validation
        if (nam === "tools") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "tools") {
            if (val > 20) alert("Invalid mark!!");
        }
        //eye contact validation
        if (nam === "eyeContact") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "eyeContact") {
            if (val > 15) alert("Invalid mark!!");
        }
        //group arrangement validation
        if (nam === "groupArrange") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "groupArrange") {
            if (val > 15) alert("Invalid mark!!");
        }
        //total mark validation
        if (nam === "Total") {
            if (!Number(val)) alert("Marks must be a number");
        }
        if (nam === "Total") {
            if (val > 100) alert("Invalid mark!!");
        }
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    onSubmit = (e)=>{
        e.preventDefault();
        const { Groupname: Groupname , introduction: introduction , organization: organization , voiceInflection: voiceInflection , voiceRate: voiceRate , tools: tools , eyeContact: eyeContact , groupArrange: groupArrange , Total: Total  } = this.state;
        const data = {
            Groupname: Groupname,
            introduction: introduction,
            organization: organization,
            voiceInflection: voiceInflection,
            voiceRate: voiceRate,
            tools: tools,
            eyeContact: eyeContact,
            groupArrange: groupArrange,
            Total: Total
        };
        console.log(data);
        //save data
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/PanelEves/savePost", data).then((res)=>{
            if (res.data.success) {
                this.setState({
                    Groupname: "",
                    introduction: "",
                    organization: "",
                    voiceInflection: "",
                    voiceRate: "",
                    tools: "",
                    eyeContact: "",
                    groupArrange: "",
                    Total: ""
                });
                alert("You are saving the details");
            }
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            className: "edit",
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "col-md-8 mt-4 mx-auto",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        style: {
                            height: '80px',
                            width: '100%',
                            backgroundColor: "#000080",
                            marginTop: '-20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                style: {
                                    color: 'white',
                                    textAlign: 'center'
                                },
                                children: "Panel Presentaion Evaluation Form"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "btn btn-success",
                                style: {
                                    marginLeft: '910px',
                                    padding: '8px 8px',
                                    backgroundColor: '#3895d3',
                                    marginBottom: "10px"
                                },
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                    href: "/panelEveHome",
                                    style: {
                                        textDecoration: 'none',
                                        backgroundColor: '#3895d3',
                                        color: 'white',
                                        fontSize: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                            class: "far fa-arrow-alt-circle-left"
                                        }),
                                        "\xa0Go Back"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                className: "row g-3",
                                style: {
                                    backgroundColor: "#ebecf0"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Group Name : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "Groupname",
                                                value: this.state.Groupname,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: " Introduction : (15 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                    children: "Aprropriately introduced himself/ herself, the topic to be presented, and clearly explained objectives of the presentation (15 marks)"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "introduction",
                                                value: this.state.introduction,
                                                placeholder: "0",
                                                onChange: this.handleChange,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Organization : (15 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                    children: " The presentation is organized in a logical manner (15 marks)"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "organization",
                                                value: this.state.organization,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Voice : (20 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("label", {
                                                className: "form-label",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                        children: " Volume and inflection was effective (10 marks)"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "voiceInflection",
                                                value: this.state.voiceInflection,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("label", {
                                                className: "form-label",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                        children: "Rate of speech was appropriate (10 marks)"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "voiceRate",
                                                value: this.state.voiceRate,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Tools : (20 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                    children: " Audiovisual resources, visual aids, and / or handoutd were used appropriatly (not relied upon)"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "tools",
                                                value: this.state.tools,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                children: "Audience Contact / Involvement : (30 marks) "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                    children: " Eye Contact (15 marks)"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "eyeContact",
                                                value: this.state.eyeContact,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                    children: "Arrange inside the group (15 marks)"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "groupArrange",
                                                value: this.state.groupArrange,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                className: "form-label",
                                                children: "Total Mark : (100 marks)"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                className: "form-control",
                                                name: "Total",
                                                value: this.state.Total,
                                                placeholder: "0",
                                                onChange: this.handleChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn btn-dark btn-lg",
                                                style: {
                                                    backgroundColor: "#0147ab"
                                                },
                                                onClick: this.onSubmit,
                                                href: "/",
                                                children: " Submit the Result"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn-success",
                                                style: {
                                                    marginLeft: '890px',
                                                    padding: '8px 8px',
                                                    backgroundColor: '#3895d3',
                                                    marginBottom: "10px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                    href: "/panelEveHome",
                                                    style: {
                                                        textDecoration: 'none',
                                                        backgroundColor: '#3895d3',
                                                        color: 'white',
                                                        fontSize: '16px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                            class: "far fa-arrow-alt-circle-left"
                                                        }),
                                                        "\xa0Go Back"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
}







function $0cb5b07d06a6a788$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [introduction, setintroduction] = $ltMAx$react.useState("");
    const [organization, setorganization] = $ltMAx$react.useState("");
    const [voiceInflection, setvoiceInflection] = $ltMAx$react.useState("");
    const [voiceRate, setvoiceRate] = $ltMAx$react.useState("");
    const [tools, settools] = $ltMAx$react.useState("");
    const [eyeContact, seteyeContact] = $ltMAx$react.useState("");
    const [groupArrange, setgroupArrange] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        introduction: "",
        organization: "",
        voiceInflection: "",
        voiceRate: "",
        tools: "",
        eyeContact: "",
        groupArrange: "",
        Total: ""
    });
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetail/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            setintroduction(res.data.getOneDetail.introduction);
            setorganization(res.data.getOneDetail.organization);
            setvoiceInflection(res.data.getOneDetail.voiceInflection);
            setvoiceRate(res.data.getOneDetail.voiceRate);
            settools(res.data.getOneDetail.tools);
            seteyeContact(res.data.getOneDetail.eyeContact);
            setgroupArrange(res.data.getOneDetail.groupArrange);
            setTotal(res.data.getOneDetail.Total);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    style: {
                        height: '80px',
                        width: '100%',
                        backgroundColor: "#000080",
                        marginTop: '-20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                            style: {
                                color: 'white',
                                textAlign: 'center'
                            },
                            children: "Panel Presentation Evaluation Sheet"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        marginLeft: '400px'
                    },
                    children: Groupname
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    className: "table",
                    style: {
                        border: '1px solid black',
                        width: '50%',
                        marginLeft: '400px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "EVALUATION FACTORS"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "MARKS"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Introduction  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Aprropriately introduced himself/ herself, the topic to be presented, and clearly explained objectives of the presentation (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        introduction
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Organization  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " The presentation is organized in a logical manner (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        organization
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Voice "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Volume and inflection was effective (10 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        voiceInflection
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Rate of speech was appropriate (10 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        voiceRate
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Tools  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Audiovisual resources, visual aids, and / or handoutd were used appropriatly (not relied upon) (20 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        tools
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Audience Contact / Involvement "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Eye Contact (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        eyeContact
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Arrange inside the group (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        groupArrange
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: "Total Mark (out of 100)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        Total
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '700px',
                        padding: '10px 10px',
                        backgroundColor: '#3895d3'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/panelEveHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}





const $b8b54a3af5d69ae2$var$AdminAdd = ()=>{
    //const history = useHistory();
    const Navigate = $ltMAx$reactrouterdom.useNavigate();
    const [name, setName] = $ltMAx$react.useState("");
    const [pdf, setPdf] = $ltMAx$react.useState([]);
    const upload = async (e)=>{
        try {
            e.preventDefault();
            const data = new FormData();
            data.append("name", name);
            for(var x = 0; x < pdf.length; x++)data.append("uploaded_Image", pdf[x]);
            const res = await fetch(`https://afsliitproject.herokuapp.com/admin`, {
                method: "POST",
                body: data
            });
            if (res.ok) {
                setName("");
                setPdf(null);
                Navigate.replace("/admin");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/UploadNaviAdmin",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    Width: 500,
                    margin: "auto",
                    marginTop: '70px',
                    backgroundColor: '#0288d1'
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                        onSubmit: upload,
                        encType: "multipart/form-data",
                        style: {
                            marginLeft: '400px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                                style: {
                                    color: "white"
                                },
                                children: [
                                    "Upload Your PDF Document HERE ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-cloud-arrow-up"
                                    }),
                                    " !"
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    placeholder: "Give a name for the Uploading Document",
                                    style: {
                                        width: '500px',
                                        marginLeft: '80px'
                                    },
                                    value: name,
                                    required: true,
                                    onChange: (e)=>{
                                        setName(e.target.value);
                                    },
                                    className: "form-control"
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "file",
                                    multiple: true,
                                    required: true,
                                    filename: "uploaded_Image",
                                    style: {
                                        textDecoration: 'none',
                                        backgroundColor: '#0147ab',
                                        color: 'white',
                                        fontSize: '25px',
                                        width: '450px',
                                        marginLeft: '110px'
                                    },
                                    className: "form-control-file",
                                    onChange: (e)=>{
                                        setPdf(e.target.files);
                                    }
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                class: "btn btn-info",
                                style: {
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '25px',
                                    width: '250px',
                                    marginLeft: '210px'
                                },
                                type: "submit",
                                variant: "primary",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-file-pdf"
                                    }),
                                    "\xa0Upload"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        ]
    });
};
var $b8b54a3af5d69ae2$export$2e2bcd8739ae039 = $b8b54a3af5d69ae2$var$AdminAdd;





const $8bf6d194969daebf$var$Home = ()=>{
    const [users, setUsers] = $ltMAx$react.useState();
    $ltMAx$react.useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch(`https://afsliitproject.herokuapp.com/admin`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                style: {
                    backgroundColor: '#000080',
                    color: "white"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: "Uploaded Documents"
                    }),
                    "  "
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/UploadNaviAdmin",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "row",
                style: {
                    marginLeft: '20px'
                },
                children: users?.map((user)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-md-3 card me-3 mt-2 p-0 mb-2 d-flex",
                        style: {
                            backgroundColor: '#b3e5fc'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                children: user.name
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                href: user.pdf,
                                download: true,
                                children: "Click to download"
                            })
                        ]
                    }, user._id)
                )
            })
        ]
    });
};
var $8bf6d194969daebf$export$2e2bcd8739ae039 = $8bf6d194969daebf$var$Home;





class $cc47c293653da663$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    marginTop: "10px"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                        style: {
                            background: '#000080',
                            color: 'white',
                            marginLeft: '0'
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: "Admin Document Upload Page "
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-success",
                        style: {
                            marginLeft: '10px',
                            marginRight: '0px',
                            padding: '10px 10px',
                            backgroundColor: '#3895d3'
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                            href: "/DocumentSubHome",
                            style: {
                                textDecoration: 'none',
                                backgroundColor: '#3895d3',
                                color: 'white',
                                fontSize: '20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    class: "far fa-arrow-alt-circle-left"
                                }),
                                "\xa0Go Back"
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '110px',
                                            marginRight: '0px',
                                            padding: '50px 50px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/AdminUpHome",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#0147ab',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-solid fa-cloud-arrow-up"
                                                }),
                                                "\xa0 UPLOADS"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                        style: {
                                            borderLeft: "6px solid #808080",
                                            height: '600px',
                                            marginLeft: '370px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '400px',
                                            marginRight: '0px',
                                            padding: '50px 50px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/AdminAdd",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#0147ab',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-regular fa-square-plus"
                                                }),
                                                "\xa0 ADD"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}




var $60f3b3b5e146599c$exports = {};
$60f3b3b5e146599c$exports = new URL("adminSubmit.58bd0c42.jpg", "file:" + __filename).toString();


class $ef2e4ff15351846d$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Document Submission Home"
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '10px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        width: '200px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/adminHome",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginLeft: '250px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                        src: (/*@__PURE__*/$parcel$interopDefault($60f3b3b5e146599c$exports)),
                        class: "mx-auto",
                        alt: "evaluation",
                        width: "1000",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/UploadNaviAdmin",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Admin Document Upload  "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '450px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/TempNavbar",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Templates Submittions  "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}





const $172eb77f73ac3814$var$STDHome = ()=>{
    const [users, setUsers] = $ltMAx$react.useState();
    $ltMAx$react.useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch(`https://afsliitproject.herokuapp.com/stdSubmit`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/SubmitNavbar",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "row",
                style: {
                    marginLeft: '20px'
                },
                children: users?.map((user)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-md-3 card me-3 mt-2 p-0 mb-2 d-flex",
                        style: {
                            backgroundColor: '#24d3fc'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                children: user.name
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                href: user.pdf,
                                download: true,
                                children: "Click to download"
                            })
                        ]
                    }, user._id)
                )
            })
        ]
    });
};
var $172eb77f73ac3814$export$2e2bcd8739ae039 = $172eb77f73ac3814$var$STDHome;




var $ae1b5c205b731980$exports = {};
$ae1b5c205b731980$exports = new URL("submit.6687863e.jpg", "file:" + __filename).toString();



class $382ddaa29abfe9f9$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    marginTop: "10px"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                        style: {
                            background: '#000080',
                            color: 'white',
                            marginLeft: '0'
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: "Student Document Submission Page "
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-success",
                        style: {
                            marginLeft: '10px',
                            marginRight: '0px',
                            padding: '10px 10px',
                            backgroundColor: '#3895d3'
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                            href: "/",
                            style: {
                                textDecoration: 'none',
                                backgroundColor: '#3895d3',
                                color: 'white',
                                fontSize: '20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    class: "far fa-arrow-alt-circle-left"
                                }),
                                "\xa0Go Back"
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        style: {
                            marginLeft: '250px'
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                            src: (/*@__PURE__*/$parcel$interopDefault($ae1b5c205b731980$exports)),
                            class: "mx-auto",
                            alt: "evaluation",
                            width: "900",
                            height: "500"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '110px',
                                            marginRight: '0px',
                                            padding: '30px 30px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/StudentSubHome",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#0147ab',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-solid fa-cloud-arrow-up"
                                                }),
                                                "\xa0 SUBMITS"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '750px',
                                            marginRight: '0px',
                                            padding: '35px 35px',
                                            backgroundColor: '#3895d3'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/StudentAdd",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#0147ab',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-solid fa-file-circle-plus"
                                                }),
                                                "\xa0 ADD SUBMISSIONS"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}





const $9b8f63455c13f7af$var$StudentAdd = ()=>{
    //const history = useHistory();
    const Navigate = $ltMAx$reactrouterdom.useNavigate();
    const [name, setName] = $ltMAx$react.useState("");
    const [pdf, setPdf] = $ltMAx$react.useState([]);
    const upload = async (e)=>{
        try {
            e.preventDefault();
            const data = new FormData();
            data.append("name", name);
            for(var x = 0; x < pdf.length; x++)data.append("uploaded_Image", pdf[x]);
            const res = await fetch(`https://afsliitproject.herokuapp.com/stdSubmit`, {
                method: "POST",
                body: data
            });
            if (res.ok) {
                setName("");
                setPdf(null);
                Navigate.replace("/stdSubmit");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/SubmitNavbar",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    Width: 500,
                    margin: "auto",
                    marginTop: '70px',
                    backgroundColor: '#187bcd'
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                        onSubmit: upload,
                        encType: "multipart/form-data",
                        style: {
                            marginLeft: '400px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                                style: {
                                    color: "white"
                                },
                                children: [
                                    "Upload Your PDF Document HERE ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-cloud-arrow-up"
                                    }),
                                    " !"
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    placeholder: "Give a name for the Uploading Document",
                                    style: {
                                        width: '500px',
                                        marginLeft: '80px'
                                    },
                                    value: name,
                                    required: true,
                                    onChange: (e)=>{
                                        setName(e.target.value);
                                    },
                                    className: "form-control"
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "file",
                                    multiple: true,
                                    required: true,
                                    filename: "uploaded_Image",
                                    style: {
                                        textDecoration: 'none',
                                        backgroundColor: '#0147ab',
                                        color: 'white',
                                        fontSize: '25px',
                                        width: '450px',
                                        marginLeft: '110px'
                                    },
                                    className: "form-control-file",
                                    onChange: (e)=>{
                                        setPdf(e.target.files);
                                    }
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                class: "btn btn-info",
                                style: {
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '25px',
                                    width: '250px',
                                    marginLeft: '210px'
                                },
                                type: "submit",
                                variant: "primary",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-file-pdf"
                                    }),
                                    "\xa0Upload"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        ]
    });
};
var $9b8f63455c13f7af$export$2e2bcd8739ae039 = $9b8f63455c13f7af$var$StudentAdd;





const $ca5463abeafdeba1$var$TempUploadHome = ()=>{
    const [users, setUsers] = $ltMAx$react.useState();
    $ltMAx$react.useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch(`https://afsliitproject.herokuapp.com/Tempadmin`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                style: {
                    backgroundColor: '#000080',
                    color: "white"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: "Uploaded Templates"
                    }),
                    "  "
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/TempNavbar",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "row",
                style: {
                    marginLeft: '20px'
                },
                children: users?.map((user)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-md-3 card me-3 mt-2 p-0 mb-2 d-flex",
                        style: {
                            backgroundColor: '#09c0e2'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                children: user.name
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                href: user.pdf,
                                download: true,
                                children: "Click to download"
                            })
                        ]
                    }, user._id)
                )
            })
        ]
    });
};
var $ca5463abeafdeba1$export$2e2bcd8739ae039 = $ca5463abeafdeba1$var$TempUploadHome;





class $6bc4cb0da640cea7$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    marginTop: "10px"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                        style: {
                            background: '#000080',
                            color: 'white',
                            marginLeft: '0'
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: "Admin Presentation Templates Upload Page "
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-success",
                        style: {
                            marginLeft: '10px',
                            marginRight: '0px',
                            padding: '10px 10px',
                            backgroundColor: '#3895d3'
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                            href: "/DocumentSubHome",
                            style: {
                                textDecoration: 'none',
                                backgroundColor: '#3895d3',
                                color: 'white',
                                fontSize: '20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    class: "far fa-arrow-alt-circle-left"
                                }),
                                "\xa0Go Back"
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '110px',
                                            marginRight: '0px',
                                            padding: '50px 50px',
                                            backgroundColor: '#9497ec'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/TempUpHome",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#4c54e4',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-solid fa-cloud-arrow-up"
                                                }),
                                                "\xa0 UPLOADS"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                        style: {
                                            borderLeft: "6px solid #808080",
                                            height: '600px',
                                            marginLeft: '370px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '400px',
                                            marginRight: '0px',
                                            padding: '50px 80px',
                                            backgroundColor: '#9497ec'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                            className: "btn btn-success",
                                            href: "/TempAdd",
                                            style: {
                                                textDecoration: 'none',
                                                backgroundColor: '#4c54e4',
                                                color: 'white',
                                                fontSize: '25px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fa-solid fa-file-powerpoint"
                                                }),
                                                "\xa0 ADD"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    }
}





const $c51ade6a2eccce22$var$TempAdd = ()=>{
    //const history = useHistory();
    const Navigate = $ltMAx$reactrouterdom.useNavigate();
    const [name, setName] = $ltMAx$react.useState("");
    const [pdf, setPdf] = $ltMAx$react.useState([]);
    const upload = async (e)=>{
        try {
            e.preventDefault();
            const data = new FormData();
            data.append("name", name);
            for(var x = 0; x < pdf.length; x++)data.append("uploaded_Image", pdf[x]);
            const res = await fetch(`https://afsliitproject.herokuapp.com/Tempadmin`, {
                method: "POST",
                body: data
            });
            if (res.ok) {
                setName("");
                setPdf(null);
                Navigate.replace("/Tempadmin");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/TempNavbar",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                style: {
                    Width: 500,
                    margin: "auto",
                    marginTop: '70px',
                    backgroundColor: '#4c54e4'
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                        onSubmit: upload,
                        encType: "multipart/form-data",
                        style: {
                            marginLeft: '400px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                                style: {
                                    color: "white"
                                },
                                children: [
                                    "Upload Your Template Document HERE ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-cloud-arrow-up"
                                    }),
                                    " !"
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "text",
                                    placeholder: "Give a name for the Uploading Document",
                                    style: {
                                        width: '500px',
                                        marginLeft: '80px'
                                    },
                                    value: name,
                                    required: true,
                                    onChange: (e)=>{
                                        setName(e.target.value);
                                    },
                                    className: "form-control"
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "form-group",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                    type: "file",
                                    multiple: true,
                                    required: true,
                                    filename: "uploaded_Image",
                                    style: {
                                        textDecoration: 'none',
                                        backgroundColor: '#0147ab',
                                        color: 'white',
                                        fontSize: '25px',
                                        width: '450px',
                                        marginLeft: '110px'
                                    },
                                    className: "form-control-file",
                                    onChange: (e)=>{
                                        setPdf(e.target.files);
                                    }
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                class: "btn btn-info",
                                style: {
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '25px',
                                    width: '250px',
                                    marginLeft: '210px'
                                },
                                type: "submit",
                                variant: "primary",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                        class: "fa-solid fa-file-pdf"
                                    }),
                                    "\xa0Upload"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        ]
    });
};
var $c51ade6a2eccce22$export$2e2bcd8739ae039 = $c51ade6a2eccce22$var$TempAdd;




var $c6228f1d82e6e195$exports = {};
$c6228f1d82e6e195$exports = new URL("Result.d5c27193.jpg", "file:" + __filename).toString();


class $7c7b6d280fac5ffe$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Evaluation Results "
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '10px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        width: '200px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginLeft: '250px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                        src: (/*@__PURE__*/$parcel$interopDefault($c6228f1d82e6e195$exports)),
                        class: "mx-auto",
                        alt: "result",
                        width: "1000",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                "  ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/DocEveResult",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Document Evaluation Results "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '450px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/PreseEveResult",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Presentation Evaluation Results "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}





const $601e3897af5126fc$var$TemplateDownload = ()=>{
    const [users, setUsers] = $ltMAx$react.useState();
    $ltMAx$react.useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch(`https://afsliitproject.herokuapp.com/Tempadmin`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                style: {
                    backgroundColor: '#000080',
                    color: "white"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: "Download Templates"
                    }),
                    "  "
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/STDdownloads",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "row",
                style: {
                    marginLeft: '20px'
                },
                children: users?.map((user)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-md-3 card me-3 mt-2 p-0 mb-2 d-flex",
                        style: {
                            backgroundColor: '#09c0e2'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                children: user.name
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                href: user.pdf,
                                download: true,
                                children: "Click to download"
                            })
                        ]
                    }, user._id)
                )
            })
        ]
    });
};
var $601e3897af5126fc$export$2e2bcd8739ae039 = $601e3897af5126fc$var$TemplateDownload;





const $0d45c31d76660f32$var$DocumentDownload = ()=>{
    const [users, setUsers] = $ltMAx$react.useState();
    $ltMAx$react.useEffect(()=>{
        const fetchUsers = async ()=>{
            const res = await fetch(`https://afsliitproject.herokuapp.com/admin`);
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                style: {
                    backgroundColor: '#000080',
                    color: "white"
                },
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: "Download Documents "
                    }),
                    "  "
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                className: "btn btn-success",
                style: {
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: '#3895d3'
                },
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                    href: "/STDdownloads",
                    style: {
                        textDecoration: 'none',
                        backgroundColor: '#3895d3',
                        color: 'white',
                        fontSize: '20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                            class: "far fa-arrow-alt-circle-left"
                        }),
                        "\xa0Go Back"
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "row",
                style: {
                    marginLeft: '20px'
                },
                children: users?.map((user)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-md-3 card me-3 mt-2 p-0 mb-2 d-flex",
                        style: {
                            backgroundColor: '#b3e5fc'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                children: user.name
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                href: user.pdf,
                                download: true,
                                children: "Click to download"
                            })
                        ]
                    }, user._id)
                )
            })
        ]
    });
};
var $0d45c31d76660f32$export$2e2bcd8739ae039 = $0d45c31d76660f32$var$DocumentDownload;




var $bf09b2d32c146001$exports = {};
$bf09b2d32c146001$exports = new URL("download.4c668f3c.png", "file:" + __filename).toString();


class $af85ff5559db8900$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("h1", {
                    style: {
                        backgroundColor: '#000080',
                        color: "white"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: "Student Material Downloads Page"
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '10px',
                        padding: '8px 8px',
                        backgroundColor: '#3895d3',
                        width: '200px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '16px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginLeft: '250px'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                        src: (/*@__PURE__*/$parcel$interopDefault($bf09b2d32c146001$exports)),
                        class: "mx-auto",
                        alt: "evaluation",
                        width: "1100",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                " ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                "  ",
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '250px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/TemplateDownload",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Templates Download "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        className: "btn btn-success",
                                        style: {
                                            marginLeft: '450px',
                                            backgroundColor: "#0147ab",
                                            width: '350px'
                                        },
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/DocumentDownload",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white',
                                                fontSize: "16px"
                                            },
                                            children: " Document Download "
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    }
}





class $c90c84610ce3f012$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    //initialize constructor to pass the props
    constructor(props){
        super(props);
        this.state = {
            //initializing an array 
            GetAllposts: []
        };
    }
    //calling the method after componenets render to the page
    componentDidMount() {
        this.retrievePanelEve();
    }
    //get request method
    retrievePanelEve() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetailssuper").then((res)=>{
            console.log(res.data);
            if (res.data.success) {
                this.setState({
                    GetAllposts: res.data.existingDocs
                });
                console.log(this.state.GetAllposts);
            }
        });
    }
    //search data according to name
    filterData(GetAllposts, searchKey) {
        const result = GetAllposts.filter((CheckOnePEv)=>CheckOnePEv.Groupname.toLowerCase().includes(searchKey) || CheckOnePEv.Groupname.includes(searchKey)
        );
        this.setState({
            GetAllposts: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetailssuper").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingDocs, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                style: {
                                    background: '#000080',
                                    width: "800px",
                                    color: 'white'
                                },
                                children: " Document Evaluvation Results"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-lg-3 my-2 mb-2",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                style: {
                                    padding: '17px 50px',
                                    marginLeft: '800px'
                                },
                                type: "search",
                                placeholder: "Enter the Group Name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                style: {
                                    width: '800px',
                                    marginLeft: '800px'
                                },
                                children: "  *you can search the group here"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                        className: "table",
                        style: {
                            width: '1000px',
                            marginLeft: "250px"
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                style: {
                                    fontSize: "25px"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "No"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: " Group Name "
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Total Marks"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                children: this.state.GetAllposts.map((GetAllposts, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "row",
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        href: `/DocEveOneResult/${GetAllposts._id}`,
                                                        style: {
                                                            TextDecoration: 'none'
                                                        },
                                                        children: [
                                                            GetAllposts.Groupname,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                children: GetAllposts.Total
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                    className: "btn btn-success",
                                    style: {
                                        marginLeft: '1150px',
                                        padding: '8px 8px',
                                        backgroundColor: '#3895d3'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                        href: "/EvaluationResult",
                                        style: {
                                            textDecoration: 'none',
                                            backgroundColor: '#3895d3',
                                            color: 'white',
                                            fontSize: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                class: "far fa-arrow-alt-circle-left"
                                            }),
                                            "\xa0Go Back"
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}







function $47d3f2081d71cff4$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [title, settitle] = $ltMAx$react.useState("");
    const [abstract, setabstract] = $ltMAx$react.useState("");
    const [problemIdentified, setproblemIdentified] = $ltMAx$react.useState("");
    const [clearyStated, setclearyStated] = $ltMAx$react.useState("");
    const [references, setreferences] = $ltMAx$react.useState("");
    const [modelframework, setmodelframework] = $ltMAx$react.useState("");
    const [MethoDescription, setMethoDescription] = $ltMAx$react.useState("");
    const [appro, setappro] = $ltMAx$react.useState("");
    const [dataCollect, setdataCollect] = $ltMAx$react.useState("");
    const [dataAnalys, setdataAnalys] = $ltMAx$react.useState("");
    const [conclusionClarity, setconclusionClarity] = $ltMAx$react.useState("");
    const [relevent, setrelevent] = $ltMAx$react.useState("");
    const [clearWritten, setclearWritten] = $ltMAx$react.useState("");
    const [logic, setlogic] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const [Comment, setComment] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        title: "",
        abstract: "",
        problemIdentified: "",
        clearyStated: "",
        references: "",
        modelframework: "",
        MethoDescription: "",
        appro: "",
        dataCollect: "",
        dataAnalys: "",
        conclusionClarity: "",
        relevent: "",
        clearWritten: "",
        logic: "",
        Total: "",
        Comment: ""
    });
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetailsuper/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            settitle(res.data.getOneDetail.title);
            setabstract(res.data.getOneDetail.abstract);
            setproblemIdentified(res.data.getOneDetail.problemIdentified);
            setclearyStated(res.data.getOneDetail.clearyStated);
            setreferences(res.data.getOneDetail.references);
            setmodelframework(res.data.getOneDetail.modelframework);
            setMethoDescription(res.data.getOneDetail.MethoDescription);
            setappro(res.data.getOneDetail.appro);
            setdataCollect(res.data.getOneDetail.dataCollect);
            setdataAnalys(res.data.getOneDetail.dataAnalys);
            setconclusionClarity(res.data.getOneDetail.conclusionClarity);
            setrelevent(res.data.getOneDetail.relevent);
            setclearWritten(res.data.getOneDetail.clearWritten);
            setlogic(res.data.getOneDetail.logic);
            setTotal(res.data.getOneDetail.Total);
            setComment(res.data.getOneDetail.Comment);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    style: {
                        height: '80px',
                        width: '100%',
                        backgroundColor: "#000080",
                        marginTop: '-20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                            style: {
                                color: 'white',
                                textAlign: 'center'
                            },
                            children: " Your Document Result"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        marginLeft: '400px'
                    },
                    children: Groupname
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    className: "table",
                    style: {
                        border: '1px solid black',
                        width: '50%',
                        marginLeft: '400px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "DESCRIPTION"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "MARKS"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Backgroud  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Title (5 mark)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Abstract (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: abstract
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Problem Identified Clearly (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: problemIdentified
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Research Area Clearly Stated (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: clearyStated
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Literature Review  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "References (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: references
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Model Framwork (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: modelframework
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Methodology "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Description (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: MethoDescription
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Appropriation (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: appro
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Data Collection Methods (5 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: dataCollect
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Result and Analysis Of Findings  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Data Analsing Methods (15 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: dataAnalys
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Conclusion  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Clear Of Conclusion (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: conclusionClarity
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Relevent (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: relevent
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Report Writing  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Clearly Writing (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: clearWritten
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: "Logical Organized (10 marks)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: logic
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: "Total Mark (out of 100)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: Total
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: "Comments or Feedback"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: Comment
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '700px',
                        padding: '10px 10px',
                        backgroundColor: '#3895d3'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/DocEveResult",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}





class $e7f9587c43bb916b$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    //initialize constructor to pass the props
    constructor(props){
        super(props);
        this.state = {
            //initializing an array 
            GetAllposts: []
        };
    }
    //calling the method after componenets render to the page
    componentDidMount() {
        this.retrievePanelEve();
    }
    //get request method
    retrievePanelEve() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetails").then((res)=>{
            console.log(res.data);
            if (res.data.success) {
                this.setState({
                    GetAllposts: res.data.existingDocs
                });
                console.log(this.state.GetAllposts);
            }
        });
    }
    //search data according to name
    filterData(GetAllposts, searchKey) {
        const result = GetAllposts.filter((CheckOnePEv)=>CheckOnePEv.Groupname.toLowerCase().includes(searchKey) || CheckOnePEv.Groupname.includes(searchKey)
        );
        this.setState({
            GetAllposts: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/GetAlldetails").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingDocs, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                style: {
                                    background: '#000080',
                                    width: "800px",
                                    color: 'white'
                                },
                                children: " Presentation Evaluvation Results"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "col-lg-3 my-2 mb-2",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                style: {
                                    padding: '17px 50px',
                                    marginLeft: '800px'
                                },
                                type: "search",
                                placeholder: "Enter the Group Name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                style: {
                                    width: '800px',
                                    marginLeft: '800px'
                                },
                                children: "  *you can search the group here"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                        className: "table",
                        style: {
                            width: '1000px',
                            marginLeft: "250px"
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                style: {
                                    fontSize: "25px"
                                },
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "No"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: " Group Name "
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Total Marks"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                children: this.state.GetAllposts.map((GetAllposts, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "row",
                                                children: index + 1
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                                        href: `/PresEveOneResult/${GetAllposts._id}`,
                                                        style: {
                                                            TextDecoration: 'none'
                                                        },
                                                        children: [
                                                            GetAllposts.Groupname,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                children: GetAllposts.Total
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                    className: "btn btn-success",
                                    style: {
                                        marginLeft: '1150px',
                                        padding: '8px 8px',
                                        backgroundColor: '#3895d3'
                                    },
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                                        href: "/EvaluationResult",
                                        style: {
                                            textDecoration: 'none',
                                            backgroundColor: '#3895d3',
                                            color: 'white',
                                            fontSize: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                class: "far fa-arrow-alt-circle-left"
                                            }),
                                            "\xa0Go Back"
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}







function $59177492ce9c1b4e$export$2e2bcd8739ae039() {
    const [Groupname, setGroupname] = $ltMAx$react.useState("");
    const [introduction, setintroduction] = $ltMAx$react.useState("");
    const [organization, setorganization] = $ltMAx$react.useState("");
    const [voiceInflection, setvoiceInflection] = $ltMAx$react.useState("");
    const [voiceRate, setvoiceRate] = $ltMAx$react.useState("");
    const [tools, settools] = $ltMAx$react.useState("");
    const [eyeContact, seteyeContact] = $ltMAx$react.useState("");
    const [groupArrange, setgroupArrange] = $ltMAx$react.useState("");
    const [Total, setTotal] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [paneleve] = $ltMAx$react.useState({
        Groupname: "",
        introduction: "",
        organization: "",
        voiceInflection: "",
        voiceRate: "",
        tools: "",
        eyeContact: "",
        groupArrange: "",
        Total: ""
    });
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/getOneDetail/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupname(res.data.getOneDetail.Groupname);
            setintroduction(res.data.getOneDetail.introduction);
            setorganization(res.data.getOneDetail.organization);
            setvoiceInflection(res.data.getOneDetail.voiceInflection);
            setvoiceRate(res.data.getOneDetail.voiceRate);
            settools(res.data.getOneDetail.tools);
            seteyeContact(res.data.getOneDetail.eyeContact);
            setgroupArrange(res.data.getOneDetail.groupArrange);
            setTotal(res.data.getOneDetail.Total);
        }).catch((err)=>console.log(err)
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    style: {
                        height: '80px',
                        width: '100%',
                        backgroundColor: "#000080",
                        marginTop: '-20px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                            style: {
                                color: 'white',
                                textAlign: 'center'
                            },
                            children: "Your Final Marks"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        marginLeft: '400px'
                    },
                    children: Groupname
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    className: "table",
                    style: {
                        border: '1px solid black',
                        width: '50%',
                        marginLeft: '400px'
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "EVALUATION FACTORS"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    scope: "col",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                                        children: "MARKS"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Introduction  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Aprropriately introduced himself/ herself, the topic to be presented, and clearly explained objectives of the presentation (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        introduction
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Organization  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " The presentation is organized in a logical manner (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        organization
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Voice "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Volume and inflection was effective (10 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        voiceInflection
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Rate of speech was appropriate (10 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        voiceRate
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Tools  "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Audiovisual resources, visual aids, and / or handoutd were used appropriatly (not relied upon) (20 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        tools
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                style: {
                                    fontSize: '20px'
                                },
                                children: [
                                    " ",
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: " Audience Contact / Involvement "
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: " Eye Contact (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        eyeContact
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                        children: "Arrange inside the group (15 marks)"
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        groupArrange
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                    style: {
                                        fontSize: '20px'
                                    },
                                    children: "Total Mark (out of 100)"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("t", {}),
                                        Total
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                    className: "btn btn-success",
                    style: {
                        marginLeft: '700px',
                        padding: '10px 10px',
                        backgroundColor: '#3895d3'
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("a", {
                        href: "/PreseEveResult",
                        style: {
                            textDecoration: 'none',
                            backgroundColor: '#3895d3',
                            color: 'white',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                class: "far fa-arrow-alt-circle-left"
                            }),
                            "\xa0Go Back"
                        ]
                    })
                })
            ]
        })
    });
}





class $89b2533ccfee3b3f$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            GName: "",
            student1: "",
            student2: "",
            student3: "",
            student4: "",
            Leader: ""
        };
    }
    handleChange = ({ target: { value: value , name: name  }  })=>this.setState({
            [name]: value
        })
    ;
    onSubmit = (e)=>{
        e.preventDefault();
        const { GName: GName , student1: student1 , student2: student2 , student3: student3 , student4: student4 , Leader: Leader  } = this.state;
        const data = {
            GName: GName,
            student1: student1,
            student2: student2,
            student3: student3,
            student4: student4,
            Leader: Leader
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/group/save", data).then((res)=>{
            if (res.data.success) this.setState({
                GName: "",
                student1: "",
                student2: "",
                student3: "",
                student4: "",
                Leader: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "edit",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/groupreg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Group Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/topicReg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Topic Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/ViewAreas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents and templates"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "col-md-8 mt-4 mx-auto",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#080523",
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    style: {
                                        color: 'white',
                                        textAlign: 'center'
                                    },
                                    children: "Group Registration Form"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    className: "row g-3",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputEmail4",
                                                    className: "form-label",
                                                    children: "Enter a name for the group : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "GName",
                                                    value: this.state.GName,
                                                    placeholder: "Create a name for the group",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the name of Student 1 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "student1",
                                                    value: this.state.student1,
                                                    placeholder: "Member 1",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the name of Student 2 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "student2",
                                                    value: this.state.student2,
                                                    placeholder: "Member 2",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the name of Student 3 "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "email",
                                                    className: "form-control",
                                                    name: "student3",
                                                    value: this.state.student3,
                                                    placeholder: "Member 3",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the name of Student 4"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "student4",
                                                    value: this.state.student4,
                                                    placeholder: "Member 4",
                                                    onChange: this.handleChange
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                    style: {
                                                        marginTop: '-20px'
                                                    },
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the details of the Leader : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Leader",
                                                    value: this.state.Leader,
                                                    placeholder: "IT number of the leader",
                                                    onChange: this.handleChange
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "btn btn btn-dark btn-lg",
                                                    onClick: this.onSubmit,
                                                    href: "/",
                                                    children: "Submit"
                                                }),
                                                "\xa0",
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                                    type: "button",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                            href: '/groups',
                                                            children: "Click here to view all Groups "
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $739a5b9bddd5848e$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        };
    }
    componentDidMount() {
        this.retriveGroups();
    }
    retriveGroups() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/groups").then((res)=>{
            if (res.data.success) {
                this.setState({
                    groups: res.data.existingGroups
                });
                console.log(this.state.groups);
            }
        });
    }
    filterData(groups, searchKey) {
        const result = groups.filter((group)=>group.GName.toLowerCase().includes(searchKey) || group.Leader.toLowerCase().includes(searchKey)
        );
        this.setState({
            groups: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/groups").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingGroups, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/groupreg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Group Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/topicReg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Topic Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/ViewAreas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents and templates"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                            children: "Registered Groups"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search for your group",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "No."
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Name of the group"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 1"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 2"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 3"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 4"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Group Leader"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.groups.map((groups, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                        href: `/details/${groups._id}`,
                                                        style: {
                                                            textDecoration: 'none'
                                                        },
                                                        children: groups.GName
                                                    })
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student2
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student3
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student4
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.Leader
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {})
                                            ]
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $378695bfd0e51975$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            Area: "",
            Topic: "",
            Supervisors: "",
            CoSupervisors: "",
            GroupName: "",
            Leader: "",
            SState: "",
            CState: "",
            Comments: ""
        };
    }
    handleChange = ({ target: { value: value , name: name  }  })=>this.setState({
            [name]: value
        })
    ;
    onSubmit = (e)=>{
        e.preventDefault();
        const { Area: Area , Topic: Topic , Supervisors: Supervisors , CoSupervisors: CoSupervisors , GroupName: GroupName , Leader: Leader , SState: SState , CState: CState , Comments: Comments  } = this.state;
        const data = {
            Area: Area,
            Topic: Topic,
            Supervisors: Supervisors,
            CoSupervisors: CoSupervisors,
            GroupName: GroupName,
            Leader: Leader,
            SState: SState,
            CState: CState,
            Comments: Comments
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/topic/save", data).then((res)=>{
            if (res.data.success) this.setState({
                Area: "",
                Topic: "",
                Supervisors: "",
                CoSupervisors: "",
                GroupName: "",
                Leader: "",
                SState: "",
                CState: "",
                Comments: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "edit",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/groupreg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Group Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/topicReg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Topic Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/ViewAreas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents and templates"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "col-md-8 mt-4 mx-auto",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#080523",
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    style: {
                                        color: 'white',
                                        textAlign: 'center'
                                    },
                                    children: "Topic Registration Form"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    className: "row g-3",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputEmail4",
                                                    className: "form-label",
                                                    children: "Research Area : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Area",
                                                    value: this.state.Area,
                                                    placeholder: "Please select the research area",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Research Topic : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Topic",
                                                    value: this.state.Topic,
                                                    placeholder: "Enter the selected topic",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Supervisor : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Supervisors",
                                                    value: this.state.Supervisors,
                                                    placeholder: "Enter the name of the selected supervisor",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Co-Supervisor :"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "email",
                                                    className: "form-control",
                                                    name: "CoSupervisors",
                                                    value: this.state.CoSupervisors,
                                                    placeholder: "Enter the name of the selected co-supervisor",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Registered name of the group :"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "GroupName",
                                                    value: this.state.GroupName,
                                                    placeholder: "Enter the registered name ",
                                                    onChange: this.handleChange
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                    style: {
                                                        marginTop: '-20px'
                                                    },
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Enter the details of the Leader : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Leader",
                                                    value: this.state.Leader,
                                                    placeholder: "IT number of the leader",
                                                    onChange: this.handleChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Supervisor state : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "SState",
                                                    value: this.state.SState,
                                                    list: "SStates",
                                                    placeholder: "Response of the Supervisor",
                                                    onChange: this.handleChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("datalist", {
                                            id: "SStates",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Supervisor response - pending"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Supervisor response - accepted"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Supervisor response - rejected"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Co-Supervisor State : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "CState",
                                                    value: this.state.CState,
                                                    list: "CStates",
                                                    placeholder: "Response of the Co-Supervisor",
                                                    onChange: this.handleChange
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("datalist", {
                                            id: "CStates",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Co-Supervisor response - pending"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Co-Supervisor response - accepted"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("option", {
                                                    value: "Co-Supervisor response - rejected"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Comments : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Comments",
                                                    value: this.state.Comments,
                                                    placeholder: "Enter the comments to be viewed about topic selection",
                                                    onChange: this.handleChange
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                                    children: 'If no comments, please proceed with a "No"'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "btn btn btn-dark btn-lg",
                                                    onClick: this.onSubmit,
                                                    href: "/",
                                                    children: "Register Topic"
                                                }),
                                                "\xa0"
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}







function $00f8db41d718b992$export$2e2bcd8739ae039() {
    const [GName, setGName] = $ltMAx$react.useState("");
    const [student1, setstudent1] = $ltMAx$react.useState("");
    const [student2, setstudent2] = $ltMAx$react.useState("");
    const [student3, setstudent3] = $ltMAx$react.useState("");
    const [student4, setstudent4] = $ltMAx$react.useState("");
    const [Leader, setLeader] = $ltMAx$react.useState("");
    const id1 = $ltMAx$reactrouterdom.useParams();
    const [group] = $ltMAx$react.useState({
        GName: "",
        student1: "",
        student2: "",
        student3: "",
        student4: "",
        Leader: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("execute onclick");
        const formData = new FormData();
        formData.append("GName", GName);
        formData.append("student1", student1);
        formData.append("student2", student2);
        formData.append("student3", student3);
        formData.append("student4", student4);
        formData.append("Leader", Leader);
        setGName("");
        setstudent1("");
        setstudent2("");
        setstudent3("");
        setstudent4("");
        setLeader("");
        console.log(formData.get('GName'));
        group.GName = formData.get('GName');
        group.student1 = formData.get('student1');
        group.student2 = formData.get('student2');
        group.student3 = formData.get('student3');
        group.student4 = formData.get('student4');
        group.Leader = formData.get('Leader');
        console.log(group);
        console.log(id1);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/group/update/${id1?.id}`, group).then((res)=>{
            console.log("return data", res);
            alert("Group is updated successfully!!");
        }).catch((err)=>{
            alert("Failed to update..!!");
            console.log(err);
        });
    };
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/group/delete/${id}`).then((res)=>{
            alert("Deleted successfully!");
            this.retriveGroups();
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id1);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/group/${id1?.id}`).then((res)=>{
            console.log("data", res);
            setGName(res.data.group.GName);
            setstudent1(res.data.group.student1);
            setstudent2(res.data.group.student2);
            setstudent3(res.data.group.student3);
            setstudent4(res.data.group.student4);
            setLeader(res.data.group.Leader);
        }).catch((err)=>console.log(err)
        );
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                    className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                "data-bs-toggle": "collapse",
                                className: "navbar-toggler",
                                "data-bs-target": "#navcol-1",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                        className: "visually-hidden",
                                        children: "Toggle navigation"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "collapse navbar-collapse",
                                id: "navcol-1",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                    className: "navbar-nav",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link ",
                                                href: "/groupreg",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Group Registration"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "/topicReg",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Topic Registration"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "/ViewAreas",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Research Areas and Topics"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "#",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Panel Evaluations"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "#",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Documents and templates"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "btn btn-warning",
                                                href: "/",
                                                style: {
                                                    height: "40px",
                                                    width: "100px",
                                                    marginTop: "8px",
                                                    marginLeft: "900px"
                                                },
                                                children: "Log Out"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            children: "Details of the Group"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                            className: "row g-3",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Name of the group : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "GName",
                                                onChange: (e)=>setGName(e.target.value)
                                                ,
                                                value: GName,
                                                placeholder: "Create a name for the group"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Member 1 : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "student1",
                                                onChange: (e)=>setstudent1(e.target.value)
                                                ,
                                                value: student1,
                                                placeholder: "Name of the first member"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Member 2 : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "student2",
                                                onChange: (e)=>setstudent2(e.target.value)
                                                ,
                                                value: student2,
                                                placeholder: "Name of the second member"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Member 3 : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "student3",
                                                onChange: (e)=>setstudent3(e.target.value)
                                                ,
                                                value: student3,
                                                placeholder: "Name of the third member"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Member 4 : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "student4",
                                                onChange: (e)=>setstudent4(e.target.value)
                                                ,
                                                value: student4,
                                                placeholder: "Name of the fourth member"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Name of the Leader : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "Leader",
                                                onChange: (e)=>setdate(e.target.value)
                                                ,
                                                value: Leader,
                                                placeholder: "IT number of the leader"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            type: "submit",
                                            onClick: (e)=>changeOnClick(e)
                                            ,
                                            children: "Update and Confirm Group Details"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            className: "btn btn-primary",
                                            href: "/",
                                            style: {
                                                textDecoration: 'none'
                                            },
                                            children: "Request Supervisors"
                                        }),
                                        "\xa0\xa0\xa0",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            className: "btn btn-danger btn-block",
                                            href: "#",
                                            onClick: ()=>this.onDelete(groups._id)
                                            ,
                                            children: "\xa0Delete Group"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}





class $d7bfee73b3ac2fe6$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            Area: "",
            Topics: ""
        };
    }
    handleChange = ({ target: { value: value , name: name  }  })=>this.setState({
            [name]: value
        })
    ;
    onSubmit = (e)=>{
        e.preventDefault();
        const { Area: Area , Topics: Topics  } = this.state;
        const data = {
            Area: Area,
            Topics: Topics
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/area/save", data).then((res)=>{
            if (res.data.success) this.setState({
                Area: "",
                Topics: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "edit",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/view",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Groups"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Supervisor allocations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Areas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Formations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Project Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "col-md-8 mt-4 mx-auto",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#080523",
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    style: {
                                        color: 'white',
                                        textAlign: 'center'
                                    },
                                    children: "Research Areas and Topics"
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    className: "row g-3",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputEmail4",
                                                    className: "form-label",
                                                    children: "Research Area : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Area",
                                                    value: this.state.Area,
                                                    placeholder: "Enter the area of the topic",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Related Research Topics : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "textArea",
                                                    className: "form-control",
                                                    name: "Topics",
                                                    value: this.state.Topics,
                                                    placeholder: "Add related topics",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "btn btn btn-dark btn-lg",
                                                    onClick: this.onSubmit,
                                                    href: "/",
                                                    children: "Save Research Area"
                                                }),
                                                "\xa0",
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                                    type: "button",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                            href: '/groups',
                                                            children: "Click here to view all Groups "
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}




var $1311cb815352966f$exports = {};
$1311cb815352966f$exports = new URL("11.4ef03720.jpg", "file:" + __filename).toString();


var $5c40d870eb84df81$exports = {};
$5c40d870eb84df81$exports = new URL("2.063c2bcd.jpg", "file:" + __filename).toString();


var $a6f38b2c38d65cf4$exports = {};
$a6f38b2c38d65cf4$exports = new URL("3.e3f5c2ce.jpg", "file:" + __filename).toString();


var $d6518e443c072b9d$exports = {};
$d6518e443c072b9d$exports = new URL("main.fab2bb5d.webp", "file:" + __filename).toString();


class $9e60e4b88b4afc2e$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            style: {
                height: '150px',
                width: '100%',
                backgroundColor: "#260248",
                marginTop: '-20px'
            },
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        color: 'white',
                        textAlign: 'center'
                    },
                    children: "Research Topic Management"
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "container",
                    style: {
                        marginLeft: "28%"
                    }
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/groupreg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Group Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/topicReg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Topic Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/ViewAreas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/EvaluationResult",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Evaluations Results"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/STDdownloads",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents and templates"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/SubmitNavbar",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents Submission page"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "800px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    class: "container-fluid bg-3 text-center",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            id: "carouselExampleSlidesOnly",
                            class: "carousel slide",
                            "data-ride": "carousel",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    class: "carousel-inner",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        class: "carousel-item active",
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            class: "d-block w-100",
                                            src: (/*@__PURE__*/$parcel$interopDefault($d6518e443c072b9d$exports)),
                                            alt: "First slide",
                                            width: "80%",
                                            height: "500"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h3", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                        children: "Benefits of this tool?"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            class: "row",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    class: "col-sm-4",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                            children: "You are given the opportunity to form your research groups and register your group via Group Registration option provided by the tool."
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            src: (/*@__PURE__*/$parcel$interopDefault($1311cb815352966f$exports)),
                                            class: "mx-auto",
                                            alt: "",
                                            width: "250",
                                            height: "250"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    class: "col-sm-4",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                            children: "Select a research topic from a particular research area and start working on with it, with the guidance of supervisors and co-supervisors."
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            src: (/*@__PURE__*/$parcel$interopDefault($5c40d870eb84df81$exports)),
                                            class: "mx-auto",
                                            alt: "",
                                            width: "250",
                                            height: "250"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    class: "col-sm-4",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                            children: "After doing the submissions, you are given the opportunity to get feedback on your projects and will be notified about your presentations."
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            src: (/*@__PURE__*/$parcel$interopDefault($a6f38b2c38d65cf4$exports)),
                                            class: "mx-auto",
                                            alt: "",
                                            width: "250",
                                            height: "250"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("footer", {
                    class: "page-footer font-small cyan darken-3",
                    style: {
                        backgroundColor: "black",
                        marginLeft: "-120px",
                        marginTop: "0px",
                        height: "170px",
                        marginRight: "-1000px",
                        marginBottom: "-40px"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                class: "row",
                                style: {
                                    marginLeft: "700px",
                                    height: "100px"
                                },
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    class: "col-md-12 py-5",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        class: "mb-5 flex-center",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "fb-ic",
                                                style: {
                                                    paddingLeft: "10px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "tw-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "gplus-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "li-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "ins-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "pin-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-pinterest fa-lg white-text fa-2x",
                                                    children: " "
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            class: "footer-copyright text-center py-3",
                            style: {
                                color: "white"
                            },
                            children: [
                                "\xa9 2020 Copyright:",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                    href: "https://mdbootstrap.com/",
                                    children: " Research Topic Mangement tool"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}




var $bcc882440bae94c2$exports = {};
$bcc882440bae94c2$exports = new URL("admin.2f061cdf.png", "file:" + __filename).toString();


var $c6853b198260a7ae$exports = {};
$c6853b198260a7ae$exports = new URL("staff.2336dfb2.jpg", "file:" + __filename).toString();


class $e4260391fe60b1df$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            style: {
                height: '150px',
                width: '100%',
                backgroundColor: "#260248",
                marginTop: '-20px'
            },
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                    style: {
                        color: 'white',
                        textAlign: 'center'
                    },
                    children: "Research Topic Management"
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "container",
                    style: {
                        marginLeft: "28%"
                    }
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/view",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Groups"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Supervisors",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Supervisor allocations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Areas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Formations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/EveHome",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Project Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/DocumentSubHome",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents / Templates Submission"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "700px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    class: "container-fluid bg-2 text-center",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            class: "row",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    class: "col-sm-4",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            src: (/*@__PURE__*/$parcel$interopDefault($bcc882440bae94c2$exports)),
                                            class: "mx-auto",
                                            alt: "",
                                            width: "300",
                                            height: "300"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/admin",
                                            children: "LOGIN AS ADMIN"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    class: "col-sm-4",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("img", {
                                            src: (/*@__PURE__*/$parcel$interopDefault($c6853b198260a7ae$exports)),
                                            class: "mx-auto",
                                            alt: "",
                                            width: "300",
                                            height: "300"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            href: "/staff",
                                            children: "\xa0LOGIN AS STAFF"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("footer", {
                    class: "page-footer font-small cyan darken-3",
                    style: {
                        backgroundColor: "black",
                        marginLeft: "-120px",
                        marginTop: "0px",
                        height: "170px",
                        marginRight: "-1000px",
                        marginBottom: "-40px"
                    },
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                class: "row",
                                style: {
                                    marginLeft: "700px",
                                    height: "100px"
                                },
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    class: "col-md-12 py-5",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        class: "mb-5 flex-center",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "fb-ic",
                                                style: {
                                                    paddingLeft: "10px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "tw-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "gplus-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "li-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "ins-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x",
                                                    children: " "
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                class: "pin-ic",
                                                style: {
                                                    paddingLeft: "20px"
                                                },
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    class: "fab fa-pinterest fa-lg white-text fa-2x",
                                                    children: " "
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            class: "footer-copyright text-center py-3",
                            style: {
                                color: "white"
                            },
                            children: [
                                "\xa9 2020 Copyright:",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                    href: "https://mdbootstrap.com/",
                                    children: " Research Topic Mangement tool"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $d3cb88d203803a06$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        };
    }
    componentDidMount() {
        this.retriveGroups();
    }
    retriveGroups() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/groups").then((res)=>{
            if (res.data.success) {
                this.setState({
                    groups: res.data.existingGroups
                });
                console.log(this.state.groups);
            }
        });
    }
    filterData(groups, searchKey) {
        const result = groups.filter((group)=>group.GName.toLowerCase().includes(searchKey) || group.Leader.toLowerCase().includes(searchKey)
        );
        this.setState({
            groups: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/groups").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingGroups, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/view",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Groups"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Supervisor allocations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Areas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Formations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Project Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                            children: "Registered Groups"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search for groups by name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "No."
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Name of the group"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 1"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 2"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 3"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Student 4"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Group Leader"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.groups.map((groups, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.GName
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student2
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student3
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.student4
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: groups.Leader
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {})
                                            ]
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $2b21758ba59fa2af$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            Area: "",
            Topics: ""
        };
        this.state = {
            areas: []
        };
    }
    handleChange = ({ target: { value: value , name: name  }  })=>this.setState({
            [name]: value
        })
    ;
    onSubmit = (e)=>{
        e.preventDefault();
        const { Area: Area , Topics: Topics  } = this.state;
        const data = {
            Area: Area,
            Topics: Topics
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post("https://afsliitproject.herokuapp.com/area/save", data).then((res)=>{
            if (res.data.success) this.setState({
                Area: "",
                Topics: ""
            });
        });
    };
    componentDidMount() {
        this.retriveAreas();
    }
    retriveAreas() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/areas").then((res)=>{
            if (res.data.success) {
                this.setState({
                    areas: res.data.existingAreas
                });
                console.log(this.state.areas);
            }
        });
    }
    filterData(areas, searchKey) {
        const result = areas.filter((area)=>area.Area.toLowerCase().includes(searchKey) || area.Topics.toLowerCase().includes(searchKey)
        );
        this.setState({
            areas: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/areas").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingAreas, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: "edit",
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/view",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Groups"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Supervisor allocations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Areas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Formations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Project Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "col-md-8 mt-4 mx-auto",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#080523",
                                marginTop: '-20px'
                            },
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                    style: {
                                        color: 'white',
                                        textAlign: 'center'
                                    },
                                    children: "Add new Topics "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    className: "form-inline",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputEmail4",
                                                    className: "form-label",
                                                    children: "Area of Research : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "Area",
                                                    value: this.state.Area,
                                                    placeholder: "Enter the research area",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    for: "inputAddress2",
                                                    className: "form-label",
                                                    children: "Topics related to the Area : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "textArea",
                                                    className: "form-control",
                                                    name: "Topics",
                                                    value: this.state.Topics,
                                                    placeholder: "Please enter all the related topics",
                                                    onChange: this.handleChange,
                                                    required: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "btn btn btn-dark btn-lg",
                                                    onClick: this.onSubmit,
                                                    href: "/",
                                                    children: "Add Details"
                                                }),
                                                "\xa0",
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "btn btn btn-succes",
                                                    href: "/",
                                                    children: "Back"
                                                }),
                                                "\xa0"
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    style: {
                                        height: '80px',
                                        width: '100%',
                                        backgroundColor: "#080523",
                                        marginTop: '-20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                            style: {
                                                color: 'white',
                                                textAlign: 'center'
                                            },
                                            children: "Research areas and topics "
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "col-lg-9 mt-2 mb-2",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                        className: "form-control",
                                        type: "search",
                                        placeholder: "Search for research areas and find topics",
                                        name: "searchQuery",
                                        onChange: this.handleSearchArea
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                                    className: "table",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "col",
                                                        children: "No."
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "col",
                                                        children: "Research Area"
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "col",
                                                        children: "Topics"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                            children: this.state.areas.map((areas, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                            scope: "row",
                                                            children: index + 1
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                            children: areas.Area
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                            children: areas.Topics
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {})
                                                    ]
                                                })
                                            )
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $a5b667f78926e161$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            areas: []
        };
    }
    componentDidMount() {
        this.retriveAreas();
    }
    retriveAreas() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/areas").then((res)=>{
            if (res.data.success) {
                this.setState({
                    areas: res.data.existingAreas
                });
                console.log(this.state.areas);
            }
        });
    }
    filterData(areas, searchKey) {
        const result = areas.filter((area)=>area.Area.toLowerCase().includes(searchKey) || area.Topics.toLowerCase().includes(searchKey)
        );
        this.setState({
            areas: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/areas").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingAreas, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/groupreg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Group Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/topicReg",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Topic Registration"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/ViewAreas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Documents and templates"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                            children: "Research Areas and related Topics"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "Search for research areas and find topics",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "No."
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Research Area"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Topics"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.areas.map((areas, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: areas.Area
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: areas.Topics
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {})
                                            ]
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}





class $33d23507225b5ef0$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            topics: []
        };
    }
    componentDidMount() {
        this.retriveTopics();
    }
    retriveTopics() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/topics").then((res)=>{
            if (res.data.success) {
                this.setState({
                    topics: res.data.existingTopics
                });
                console.log(this.state.topics);
            }
        });
    }
    filterData(topics, searchKey) {
        const result = topics.filter((topic)=>topic.Supervisors.toLowerCase().includes(searchKey) || topic.CoSupervisors.toLowerCase().includes(searchKey)
        );
        this.setState({
            topics: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/topics").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingTopics, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                        className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                    "data-bs-toggle": "collapse",
                                    className: "navbar-toggler",
                                    "data-bs-target": "#navcol-1",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "visually-hidden",
                                            children: "Toggle navigation"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                            className: "navbar-toggler-icon"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navcol-1",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link ",
                                                    href: "/view",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Groups"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Supervisor allocations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "/Areas",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Research Areas and Topics"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Panel Formations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "nav-link",
                                                    href: "#",
                                                    style: {
                                                        fontsize: '15px',
                                                        color: 'rgb(255,255,255)'
                                                    },
                                                    children: "Project Evaluations"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    className: "btn btn-warning",
                                                    href: "/",
                                                    style: {
                                                        height: "40px",
                                                        width: "100px",
                                                        marginTop: "8px",
                                                        marginLeft: "900px"
                                                    },
                                                    children: "Log Out"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                            children: "Supervisor Selections"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search fby your name",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "No."
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Project Topic"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Selected Supervisor"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Selected Co-Supervisor"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "GroupName"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.topics.map((topics, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                        href: `/Response/${topics._id}`,
                                                        style: {
                                                            textDecoration: 'none'
                                                        },
                                                        children: topics.Topic
                                                    })
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topics.Supervisors
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topics.CoSupervisors
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topics.GroupName
                                                })
                                            ]
                                        })
                                    )
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}







function $df8d3d3f875c458a$export$2e2bcd8739ae039() {
    const [Area, setArea] = $ltMAx$react.useState("");
    const [Topic, setTopic] = $ltMAx$react.useState("");
    const [Supervisors, setSupervisors] = $ltMAx$react.useState("");
    const [CoSupervisors, setCoSupervisors] = $ltMAx$react.useState("");
    const [GroupName, setGroupName] = $ltMAx$react.useState("");
    const [Leader, setLeader] = $ltMAx$react.useState("");
    const [SState, setSState] = $ltMAx$react.useState("");
    const [CState, setCState] = $ltMAx$react.useState("");
    const [Comments, setComments] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [topic] = $ltMAx$react.useState({
        Area: "",
        Topic: "",
        Supervisors: "",
        CoSupervisors: "",
        GroupName: "",
        Leader: "",
        SState: "",
        CState: "",
        Comments: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("execute onclick");
        const formData = new FormData();
        formData.append("Area", Area);
        formData.append("Topic", Topic);
        formData.append("Supervisors", Supervisors);
        formData.append("CoSupervisors", CoSupervisors);
        formData.append("GroupName", GroupName);
        formData.append("Leader", Leader);
        formData.append("SState", SState);
        formData.append("CState", CState);
        formData.append("Comments", Comments);
        setArea("");
        setTopic("");
        setSupervisors("");
        setCoSupervisors("");
        setGroupName("");
        setLeader("");
        setSState("");
        setCState("");
        setComments("");
        console.log(formData.get('Area'));
        topic.Area = formData.get('Area');
        topic.Topic = formData.get('Topic');
        topic.Supervisors = formData.get('Supervisors');
        topic.CoSupervisors = formData.get('CoSupervisors');
        topic.GroupName = formData.get('GroupName');
        topic.Leader = formData.get('Leader');
        topic.SState = formData.get('SState');
        topic.CState = formData.get('CState');
        topic.Comments = formData.get('Comments');
        console.log(topic);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/topic/update/${id?.id}`, group).then((res)=>{
            console.log("return data", res);
            alert("Response sent successfully!!");
        }).catch((err)=>{
            alert("Failed to send response..!!");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/topic/${id?.id}`).then((res)=>{
            console.log("data", res);
            setArea(res.data.topic.Area);
            setTopic(res.data.topic.Topic);
            setSupervisors(res.data.topic.Supervisors);
            setCoSupervisors(res.data.topic.CoSupervisors);
            setGroupName(res.data.topic.GroupName);
            setLeader(res.data.topic.Leader);
            setSState(res.data.topic.SState);
            setCState(res.data.topic.CState);
            setComments(res.data.topic.Comments);
        }).catch((err)=>console.log(err)
        );
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                    className: "navbar navbar-light navbar-expand-md bg-dark navigation-clean-search",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                "data-bs-toggle": "collapse",
                                className: "navbar-toggler",
                                "data-bs-target": "#navcol-1",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                        className: "visually-hidden",
                                        children: "Toggle navigation"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "collapse navbar-collapse",
                                id: "navcol-1",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("ul", {
                                    className: "navbar-nav",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link ",
                                                href: "/groupreg",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Group Registration"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "/topicReg",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Topic Registration"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "/ViewAreas",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Research Areas and Topics"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "#",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Panel Evaluations"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "nav-link",
                                                href: "#",
                                                style: {
                                                    fontsize: '15px',
                                                    color: 'rgb(255,255,255)'
                                                },
                                                children: "Documents and templates"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("li", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                className: "btn btn-warning",
                                                href: "/",
                                                style: {
                                                    height: "40px",
                                                    width: "100px",
                                                    marginTop: "8px",
                                                    marginLeft: "900px"
                                                },
                                                children: "Log Out"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            children: "Confirmation of the availability of the Supervisors"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                            className: "row g-3",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Selected Research area : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "Area",
                                                onChange: (e)=>setArea(e.target.value)
                                                ,
                                                value: Area
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Selected topic : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "Topic",
                                                onChange: (e)=>setTopic(e.target.value)
                                                ,
                                                value: Topic
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Name of the selected Supervisor : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "Supervisors",
                                                onChange: (e)=>setSupervisors(e.target.value)
                                                ,
                                                value: Supervisors
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Name of the selected Co-Supervisor : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "CoSupervisors",
                                                onChange: (e)=>setCoSupervisors(e.target.value)
                                                ,
                                                value: CoSupervisors
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Name of the group : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "GroupName",
                                                onChange: (e)=>setGroupName(e.target.value)
                                                ,
                                                value: GroupName
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Response from the Supervisor : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "SState",
                                                onChange: (e)=>setSState(e.target.value)
                                                ,
                                                value: SState
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        style: {
                                            marginBottom: '15px'
                                        },
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                style: {
                                                    margineBottom: '5px'
                                                },
                                                children: "Response from the Co-Supervisor : "
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                type: "text",
                                                name: "CState",
                                                onChange: (e)=>setCState(e.target.value)
                                                ,
                                                value: CState
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            type: "submit",
                                            onClick: (e)=>changeOnClick(e)
                                            ,
                                            children: "Submit Response"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}




class $a75f642b815fc93f$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        children: " Home "
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/Registration",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "registration"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/AddTopisPanels",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "Topic panel"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/AddPresentationPanels",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "Presentation panel"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/AddThesisPanels",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "Thesis panel"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/Groupids",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "groups"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/AdminLogin",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "Admin Login"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/StaffLogin",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "staff Login"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/Viewallusers",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "view all users"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h4", {
                        children: "student side panel members "
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/S_ViewTopis",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "view topic panel-stu side"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/S_ViewPresentation",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "view presenatation panel-stu side"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0",
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        className: "btn btn-warning",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            href: "/S_ViewThesis",
                            style: {
                                textDecoration: 'none',
                                color: 'white',
                                marginTop: '15px'
                            },
                            children: "view thesis panel-stu side"
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                        className: "far fa-check-square"
                    }),
                    "\xa0"
                ]
            })
        });
    }
}






let $9df5b5eebe1b3e66$var$LoginURL = "https://afsliitproject.herokuapp.com/signin";
let $9df5b5eebe1b3e66$var$AuthURL = "https://afsliitproject.herokuapp.com/auth";
let $9df5b5eebe1b3e66$var$getAllUsers = "https://afsliitproject.herokuapp.com/getallusers";
let $9df5b5eebe1b3e66$var$Createuser = "https://afsliitproject.herokuapp.com/createUser";
let $9df5b5eebe1b3e66$var$Updateuser = "https://afsliitproject.herokuapp.com/user/updateUserById/";
let $9df5b5eebe1b3e66$var$Deleteuser = "https://afsliitproject.herokuapp.com/user/deleteUser/";
async function $9df5b5eebe1b3e66$export$be6bf124df73f3b6(data) {
    const alldata = {
        Name: data.Name,
        ID: data.ID,
        Email: data.Email,
        PhoneNumber: data.PhoneNumber,
        Password: data.Password,
        userRole: "user"
    };
    return await ($parcel$interopDefault($ltMAx$axios)).post($9df5b5eebe1b3e66$var$Createuser, alldata);
}
async function $9df5b5eebe1b3e66$export$9ba426bb3d42db24(data) {
    const alldata = {
        Email: data.Email,
        Password: data.Password
    };
    return await ($parcel$interopDefault($ltMAx$axios)).post($9df5b5eebe1b3e66$var$LoginURL, alldata);
}
async function $9df5b5eebe1b3e66$export$95fd3e94ac9e4d52(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return await ($parcel$interopDefault($ltMAx$axios)).get($9df5b5eebe1b3e66$var$AuthURL, config);
}
async function $9df5b5eebe1b3e66$export$92ff5f7619631177() {
    return ($parcel$interopDefault($ltMAx$axios)).get($9df5b5eebe1b3e66$var$getAllUsers);
}
async function $9df5b5eebe1b3e66$export$101f27d038f8ed94(id, data) {
    const alldata = {
        name: data.name,
        ID: data.ID,
        email: data.email,
        PhoneNumber: data.PhoneNumber,
        password: data.password,
        userRole: "user"
    };
    return await ($parcel$interopDefault($ltMAx$axios)).patch($9df5b5eebe1b3e66$var$Updateuser + id, alldata);
}
async function $9df5b5eebe1b3e66$export$5776d92ddb466297(id) {
    return await ($parcel$interopDefault($ltMAx$axios)).delete($9df5b5eebe1b3e66$var$Deleteuser + id);
}


const $678948f893e4d8e0$var$Register = ()=>{
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    const [Name, setName] = $ltMAx$react.useState('');
    const [ID, setID] = $ltMAx$react.useState('');
    const [Email, setEmail] = $ltMAx$react.useState('');
    const [PhoneNumber, setPhoneNumber] = $ltMAx$react.useState('');
    const [Password, setPassword] = $ltMAx$react.useState('');
    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleID = (e)=>{
        setID(e.target.value);
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handlePhoneNumber = (e)=>{
        setPhoneNumber(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (Name === '' || ID === '' || Email === '' || PhoneNumber === '' || Password === '') alert("Fill all the data");
        else {
            let newdata = {
                Name: Name,
                ID: ID,
                Email: Email,
                PhoneNumber: PhoneNumber,
                Password: Password
            };
            let cusdata = await $9df5b5eebe1b3e66$export$be6bf124df73f3b6(newdata);
            console.log("return data", cusdata);
            localStorage.setItem("token", cusdata.data.token);
            localStorage.setItem("userRole", cusdata.data.userRole);
            navigate('/Login');
        }
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        style: {
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                style: {
                                    color: "purple"
                                },
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                    children: "WELCOME TO SLIIT RESEAECH PROJECT MANAGEMENT"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/Home",
                            children: "Home"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/AdminLogin",
                            children: "Admin Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/StaffLogin",
                            children: "Staff Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/Login",
                            children: "Student Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarNavAltMarkup",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: " student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            width: "500",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("th", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                                style: {
                                                    color: ""
                                                },
                                                children: "Registration"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Name: "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            value: Name,
                                                            onChange: handleName,
                                                            placeholder: "enter name as in sliit id"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Sliit ID: "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            value: ID,
                                                            onChange: handleID,
                                                            placeholder: "enter sliit id"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "  Email Address: "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            value: Email,
                                                            onChange: handleEmail,
                                                            placeholder: "enter sliit id"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "  Contact Number: "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            value: PhoneNumber,
                                                            onChange: handlePhoneNumber,
                                                            placeholder: "enter a contact number"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "  Password: "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            value: Password,
                                                            onChange: handlePassword,
                                                            placeholder: "create a password(should be at least 6 charactors)"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                        onClick: handleSubmit,
                                                        className: "btn btn-primary btn-lg active",
                                                        type: "submit",
                                                        children: "Register"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                                            className: "link",
                                            children: [
                                                "Already have an account? ",
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Link, {
                                                    to: "/Login",
                                                    children: "Sign Up"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
var $678948f893e4d8e0$export$2e2bcd8739ae039 = $678948f893e4d8e0$var$Register;






const $41f71f5a6f8b36cf$var$Login = ()=>{
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    const [formData, setFormData] = $ltMAx$react.useState({
        Email: "",
        Password: ""
    });
    const { Email: Email , Password: Password  } = formData;
    const onChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    ;
    const onSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        let data = await $9df5b5eebe1b3e66$export$9ba426bb3d42db24(formData);
        console.log("data", data);
        if (data.data.token) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userRole", data.data.userRole);
            navigate("/");
        } else alert("Error occured !  Login credentials wrong...");
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            style: {
                                color: "purple"
                            },
                            children: "WELCOME TO SLIIT RESEARCH PROJECT MANAGEMENT"
                        })
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/",
                            children: "Home"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/Login",
                            children: "Student Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarNavAltMarkup",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: " student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "login-form",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            className: "heading",
                            children: "Sign In"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "lead",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    className: "fas fa-user"
                                }),
                                " Student Login"
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("th", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                            onSubmit: (e)=>onSubmit(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Email Address : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "Email",
                                                            className: "form-control",
                                                            placeholder: "Email Address",
                                                            name: "Email",
                                                            value: Email,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Password : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "password",
                                                            className: "form-control",
                                                            placeholder: "Password",
                                                            name: "Password",
                                                            minLength: "6",
                                                            value: Password,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "submit",
                                                        className: "btn btn-primary btn-lg active",
                                                        value: "Login"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "link",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Link, {
                                    to: "/",
                                    children: "Sign Up"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $41f71f5a6f8b36cf$export$2e2bcd8739ae039 = $41f71f5a6f8b36cf$var$Login;






const $40c9d7c3d9ae3a5c$var$Login = ()=>{
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    const [formData, setFormData] = $ltMAx$react.useState({
        Email: "",
        Password: ""
    });
    const { Email: Email , Password: Password  } = formData;
    const onChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    ;
    const onSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        let data = await $9df5b5eebe1b3e66$export$9ba426bb3d42db24(formData);
        console.log("data", data);
        if (data.data.token) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userRole", data.data.userRole);
            navigate("/");
        } else alert("Error occured !  Login credentials wrong...");
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            style: {
                                color: "purple"
                            },
                            children: "WELCOME TO SLIIT RESEARCH PROJECT MANAGEMENT"
                        })
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/Hotel",
                            children: "Home"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/AdminLogin",
                            children: "Admin Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarNavAltMarkup",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: " student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "login-form",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            className: "heading",
                            children: "Sign In"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "lead",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    className: "fas fa-user"
                                }),
                                " Admin Login"
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("th", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                            onSubmit: (e)=>onSubmit(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Email Address : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "Email",
                                                            className: "form-control",
                                                            placeholder: "Email Address",
                                                            name: "Email",
                                                            value: Email,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Password : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "password",
                                                            className: "form-control",
                                                            placeholder: "Password",
                                                            name: "Password",
                                                            minLength: "6",
                                                            value: Password,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "submit",
                                                        className: "btn btn-primary btn-lg active",
                                                        value: "Login"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "link",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Link, {
                                    to: "/",
                                    children: "Sign Up"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $40c9d7c3d9ae3a5c$export$2e2bcd8739ae039 = $40c9d7c3d9ae3a5c$var$Login;






const $007307e82316f5c7$var$Login = ()=>{
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    const [formData, setFormData] = $ltMAx$react.useState({
        Email: "",
        Password: ""
    });
    const { Email: Email , Password: Password  } = formData;
    const onChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    ;
    const onSubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        let data = await $9df5b5eebe1b3e66$export$9ba426bb3d42db24(formData);
        console.log("data", data);
        if (data.data.token) {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("userRole", data.data.userRole);
            navigate("/");
        } else alert("Error occured !  Login credentials wrong...");
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    style: {
                        marginTop: "30px"
                    },
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            style: {
                                color: "purple"
                            },
                            children: "WELCOME TO SLIIT RESEARCH PROJECT MANAGEMENT"
                        })
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/Hotel",
                            children: "Home"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                            className: "navbar-brand",
                            href: "/StaffLogin",
                            children: "Staff Login"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            className: "navbar-toggler",
                            type: "button",
                            "data-bs-toggle": "collapse",
                            "data-bs-target": "#navbarNavAltMarkup",
                            "aria-controls": "navbarNavAltMarkup",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                className: "navbar-toggler-icon"
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "collapse navbar-collapse",
                            id: "navbarNavAltMarkup",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "navbar-nav",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: " student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "student"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "staff"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                        style: {
                                            display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                        },
                                        className: "nav-link active",
                                        href: "/",
                                        "aria-current": "page",
                                        children: "admin"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "login-form",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            className: "heading",
                            children: "Sign In"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "lead",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                    className: "fas fa-user"
                                }),
                                " Staff Member Login"
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("th", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                            onSubmit: (e)=>onSubmit(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Email Address : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "Email",
                                                            className: "form-control",
                                                            placeholder: "Email Address",
                                                            name: "Email",
                                                            value: Email,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: '15px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            style: {
                                                                margineBottom: '5px'
                                                            },
                                                            children: "Enter Password : "
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "password",
                                                            className: "form-control",
                                                            placeholder: "Password",
                                                            name: "Password",
                                                            minLength: "6",
                                                            value: Password,
                                                            onChange: (e)=>onChange(e)
                                                            ,
                                                            required: true
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "submit",
                                                        className: "btn btn-primary btn-lg active",
                                                        value: "Login"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("p", {
                            className: "link",
                            children: [
                                "Don't have an account? ",
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Link, {
                                    to: "/",
                                    children: "Sign Up"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $007307e82316f5c7$export$2e2bcd8739ae039 = $007307e82316f5c7$var$Login;





class $6f15b07f3c41c94e$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            GroupId: "",
            PanelMember1: "",
            PanelMember2: "",
            PanelMember3: "",
            PanelMember4: ""
        };
    }
    handleInputChange = (e)=>{
        const { name: name , value: value  } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    onSubmit = (e)=>{
        e.preventDefault();
        const { GroupId: GroupId , PanelMember1: PanelMember1 , PanelMember2: PanelMember2 , PanelMember3: PanelMember3 , PanelMember4: PanelMember4  } = this.state;
        const data = {
            GroupId: GroupId,
            PanelMember1: PanelMember1,
            PanelMember2: PanelMember2,
            PanelMember3: PanelMember3,
            PanelMember4: PanelMember4
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post(`https://afsliitproject.herokuapp.com/TopicPanels/save`, data).then((res)=>{
            console.log(data);
            if (res.data.success) this.setState({
                GroupId: "",
                PanelMember1: "",
                PanelMember2: "",
                PanelMember3: "",
                PanelMember4: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            children: " -TOPIC PANEL FORMATION- "
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            width: "950px",
                            height: "500px",
                            style: {
                                margin: "20px"
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: " Student Group ID : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "GroupId",
                                                        value: this.state.GroupId,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "Enter group id"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 1: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember1",
                                                        value: this.state.PanelMember1,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 1"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "  Panel Member 2: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember2",
                                                        value: this.state.PanelMember2,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 3 : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember3",
                                                        value: this.state.PanelMember3,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 3"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 4: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember4",
                                                        value: this.state.PanelMember4,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                                className: "btn btn-warning",
                                                type: "submit",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                },
                                                onClick: this.onSubmit,
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                        className: "far fa-check-square"
                                                    }),
                                                    " Submit "
                                                ]
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn-warning",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    href: "/ViewTopis",
                                                    style: {
                                                        textDecoration: 'none',
                                                        color: 'white',
                                                        marginTop: '15px'
                                                    },
                                                    children: "View Details"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                className: "far fa-check-square"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}





class $47564792bf847415$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            GroupId: "",
            PanelMember1: "",
            PanelMember2: "",
            PanelMember3: "",
            PanelMember4: ""
        };
    }
    handleInputChange = (e)=>{
        const { name: name , value: value  } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    onSubmit = (e)=>{
        e.preventDefault();
        const { GroupId: GroupId , PanelMember1: PanelMember1 , PanelMember2: PanelMember2 , PanelMember3: PanelMember3 , PanelMember4: PanelMember4  } = this.state;
        const data = {
            GroupId: GroupId,
            PanelMember1: PanelMember1,
            PanelMember2: PanelMember2,
            PanelMember3: PanelMember3,
            PanelMember4: PanelMember4
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post(`https://afsliitproject.herokuapp.com/PresentationPanels/save`, data).then((res)=>{
            console.log(data);
            if (res.data.success) this.setState({
                GroupId: "",
                PanelMember1: "",
                PanelMember2: "",
                PanelMember3: "",
                PanelMember4: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            children: " PRESENTATION PANEL FORMATION "
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            width: "950px",
                            height: "500px",
                            style: {
                                margin: "20px"
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: " Student Group ID : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "GroupId",
                                                        value: this.state.GroupId,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "Enter group id"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 1: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember1",
                                                        value: this.state.PanelMember1,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 1"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "  Panel Member 2: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember2",
                                                        value: this.state.PanelMember2,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 3 : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember3",
                                                        value: this.state.PanelMember3,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 3"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 4: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember4",
                                                        value: this.state.PanelMember4,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                                className: "btn btn-warning",
                                                type: "submit",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                },
                                                onClick: this.onSubmit,
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                        className: "far fa-check-square"
                                                    }),
                                                    " Submit "
                                                ]
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn-warning",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    href: "/ViewPresentation",
                                                    style: {
                                                        textDecoration: 'none',
                                                        color: 'white',
                                                        marginTop: '15px'
                                                    },
                                                    children: "View Panels"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                className: "far fa-check-square"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}





class $2ac390e2c12421db$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            GroupId: "",
            PanelMember1: "",
            PanelMember2: "",
            PanelMember3: "",
            PanelMember4: ""
        };
    }
    handleInputChange = (e)=>{
        const { name: name , value: value  } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    };
    onSubmit = (e)=>{
        e.preventDefault();
        const { GroupId: GroupId , PanelMember1: PanelMember1 , PanelMember2: PanelMember2 , PanelMember3: PanelMember3 , PanelMember4: PanelMember4  } = this.state;
        const data = {
            GroupId: GroupId,
            PanelMember1: PanelMember1,
            PanelMember2: PanelMember2,
            PanelMember3: PanelMember3,
            PanelMember4: PanelMember4
        };
        console.log(data);
        ($parcel$interopDefault($ltMAx$axios)).post(`https://afsliitproject.herokuapp.com/ThesisPanels/save`, data).then((res)=>{
            console.log(data);
            if (res.data.success) this.setState({
                GroupId: "",
                PanelMember1: "",
                PanelMember2: "",
                PanelMember3: "",
                PanelMember4: ""
            });
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                            children: " THESIS PANEL FORMATION "
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                            width: "950px",
                            height: "500px",
                            style: {
                                margin: "20px"
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: " Student Group ID : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "GroupId",
                                                        value: this.state.GroupId,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "Enter group id"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 1: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember1",
                                                        value: this.state.PanelMember1,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 1"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "  Panel Member 2: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember2",
                                                        value: this.state.PanelMember2,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 3 : "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember3",
                                                        value: this.state.PanelMember3,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 3"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "form-group",
                                                style: {
                                                    marginBottom: '15px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        style: {
                                                            margineBottom: '5px'
                                                        },
                                                        children: "Panel Member 4: "
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        name: "PanelMember4",
                                                        value: this.state.PanelMember4,
                                                        onChange: this.handleInputChange,
                                                        placeholder: "member 4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                                className: "btn btn-warning",
                                                type: "submit",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white'
                                                },
                                                onClick: this.onSubmit,
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                        className: "far fa-check-square"
                                                    }),
                                                    " Submit "
                                                ]
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                className: "btn btn-warning",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                    href: "/ViewThesis",
                                                    style: {
                                                        textDecoration: 'none',
                                                        color: 'white',
                                                        marginTop: '15px'
                                                    },
                                                    children: "View Panels"
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                className: "far fa-check-square"
                                            }),
                                            "\xa0",
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        });
    }
}





class $fbcc20d0315acb34$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            topic: []
        };
    }
    componentDidMount() {
        this.retrieveTopicpanel();
    }
    retrieveTopicpanel() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/TopicPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    topic: res.data.existingTopicPanels
                });
                console.log(this.state.topic);
            }
        });
    }
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/TopicPanels/delete/${id}`).then((res)=>{
            alert("Delete successfully");
            this.retrieveTopicpanel();
        });
    };
    //to serch specific data
    filterData(topic1, searchKey) {
        const result = topic1.filter((topic)=>topic.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            topic: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/TopicPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingTopicPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "TOPIC PANEL FORMATION DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search group id",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                                className: "table",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "id"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Group ID"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 1"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 2"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 3"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 4"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                        children: this.state.topic.map((topic, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "row",
                                                        children: index + 1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            topic.GroupId,
                                                            "  "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: topic.PanelMember1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: topic.PanelMember2
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: topic.PanelMember3
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: topic.PanelMember4
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: `/UpdateTopics/${topic._id}`,
                                                                children: "\xa0Edit"
                                                            }),
                                                            "\xa0 \xa0",
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: "/",
                                                                onClick: ()=>this.onDelete(topic._id)
                                                                ,
                                                                children: "\xa0Delete"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "btn btn-lg btn-primary",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                    href: "/AddTopisPanels",
                                    style: {
                                        textDecoration: 'none',
                                        color: 'white',
                                        marginTop: '15px'
                                    },
                                    children: " new Topic Panel"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}





class $0fa0cf2fb7e36115$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            thesis: []
        };
    }
    componentDidMount() {
        this.retrieveThesisPanels();
    }
    retrieveThesisPanels() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/ThesisPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    thesis: res.data.existingThesisPanels
                });
                console.log(this.state.thesis);
            }
        });
    }
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/ThesisPanels/delete/${id}`).then((res)=>{
            alert("Delete successfully");
            this.retrieveThesisPanels();
        });
    };
    //to serch specific data
    filterData(thesis1, searchKey) {
        const result = thesis1.filter((thesis)=>thesis.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            thesis: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/ThesisPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingThesisPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "THESIS PANEL FORMATION DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search group id",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                                className: "table",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "id"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Group ID"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 1"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 2"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 3"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 4"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                        children: this.state.thesis.map((thesis, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "row",
                                                        children: index + 1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            thesis.GroupId,
                                                            "  "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: thesis.PanelMember1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: thesis.PanelMember2
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: thesis.PanelMember3
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: thesis.PanelMember4
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: `/UpdateThesis/${thesis._id}`,
                                                                children: "\xa0Edit"
                                                            }),
                                                            "\xa0 \xa0",
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: "/",
                                                                onClick: ()=>this.onDelete(thesis._id)
                                                                ,
                                                                children: "\xa0Delete"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "btn btn-lg btn-primary",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                    href: "/AddThesisPanels",
                                    style: {
                                        textDecoration: 'none',
                                        color: 'white',
                                        marginTop: '15px'
                                    },
                                    children: " new thesis panel"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}





class $f660256451162782$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            present: []
        };
    }
    componentDidMount() {
        this.retrievePresentationPanels();
    }
    retrievePresentationPanels() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/PresentationPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    present: res.data.existingPresentationPanels
                });
                console.log(this.state.present);
            }
        });
    }
    onDelete = (id)=>{
        ($parcel$interopDefault($ltMAx$axios)).delete(`https://afsliitproject.herokuapp.com/PresentationPanels/delete/${id}`).then((res)=>{
            alert("Delete successfully");
            this.retrievePresentationPanels();
        });
    };
    filterData(present1, searchKey) {
        const result = present1.filter((present)=>present.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            present: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/PresentationPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingPresentationPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "PRESENTATION PANEL FORMATION DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search by group id",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                                className: "table",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "id"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Group ID"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 1"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 2"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 3"
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "col",
                                                    children: "Member 4"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                        children: this.state.present.map((present, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                        scope: "row",
                                                        children: index + 1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            present.GroupId,
                                                            "  "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: present.PanelMember1
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: present.PanelMember2
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: present.PanelMember3
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                        children: present.PanelMember4
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                        children: [
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: `/Updatepresentation/${present._id}`,
                                                                children: "\xa0Edit"
                                                            }),
                                                            "\xa0 \xa0",
                                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                                className: "btn btn-primary",
                                                                style: {
                                                                    textDecoration: 'none',
                                                                    color: 'white'
                                                                },
                                                                href: "/",
                                                                onClick: ()=>this.onDelete(present._id)
                                                                ,
                                                                children: "\xa0Delete"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "btn btn-lg btn-primary",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                    href: "/AddPresentationPanels",
                                    style: {
                                        textDecoration: 'none',
                                        color: 'white',
                                        marginTop: '15px'
                                    },
                                    children: " new Presentation panel"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}







const $403313e75659f647$var$Viewallusers = ()=>{
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    const handleSubmit = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/Login");
    };
    const [users1, setusers] = $ltMAx$react.useState([]);
    const GetRooms = async ()=>{
        let data = await $9df5b5eebe1b3e66$export$92ff5f7619631177();
        let cusdata = [];
        console.log("All Users", data?.data);
        data?.data.map((users)=>{
            if (users?.userRole == "user") cusdata.push(users);
        });
        setusers(cusdata);
    };
    $ltMAx$react.useEffect(()=>{
        GetRooms();
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
        style: {
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                style: {
                    marginTop: "30px"
                }
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("nav", {
                className: "navbar navbar-expand-lg navbar-dark bg-dark",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "container-fluid",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                className: "navbar-brand",
                                href: "/Home",
                                children: "Home"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarNavAltMarkup",
                                "aria-controls": "navbarNavAltMarkup",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                                    className: "navbar-toggler-icon"
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "collapse navbar-collapse",
                                id: "navbarNavAltMarkup",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    className: "navbar-nav",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "student"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "student"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: " student"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "user" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "student"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "staff"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "staff"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "staff"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "staff" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "staff"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "admin"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "admin"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "admin"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                            style: {
                                                display: localStorage.getItem("userRole") == "admin" ? "flex" : "none"
                                            },
                                            className: "nav-link active",
                                            href: "/",
                                            "aria-current": "page",
                                            children: "admin"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        onClick: handleSubmit,
                        className: "btn btn-primary",
                        type: "submit",
                        style: {
                            float: "right"
                        },
                        children: "Logout"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("center", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("b", {
                                    style: {
                                        fontSize: "48px",
                                        textDecoration: "underline"
                                    },
                                    children: "Registed Users Details "
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table table-striped table-success",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "#"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "User Name"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "SLIIT ID"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "Sliit Email Address"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "Contact Number"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                children: "Delete user"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: users1.map((users, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: users?.Name
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: users?.ID
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: users?.Email
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: users?.PhoneNumber
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: users?.Password
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                    children: [
                                                        "  ",
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                            className: "btn btn-primary",
                                                            style: {
                                                                textDecoration: 'none',
                                                                color: 'white'
                                                            },
                                                            href: "/",
                                                            children: "\xa0Delete"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $403313e75659f647$export$2e2bcd8739ae039 = $403313e75659f647$var$Viewallusers;







function $472e2ee2ccdfa0c9$export$2e2bcd8739ae039() {
    const [GroupId, setGroupId] = $ltMAx$react.useState("");
    const [PanelMember1, setPanelMember1] = $ltMAx$react.useState("");
    const [PanelMember2, setPanelMember2] = $ltMAx$react.useState("");
    const [PanelMember3, setPanelMember3] = $ltMAx$react.useState("");
    const [PanelMember4, setPanelMember4] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [topic] = $ltMAx$react.useState({
        GroupId: "",
        PanelMember1: "",
        PanelMember2: "",
        PanelMember3: "",
        PanelMember4: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("onclick");
        const formData = new FormData();
        formData.append("GroupId", GroupId);
        formData.append("PanelMember1", PanelMember1);
        formData.append("PanelMember2", PanelMember2);
        formData.append("PanelMember3", PanelMember3);
        formData.append("PanelMember4", PanelMember4);
        setGroupId("");
        setPanelMember1("");
        setPanelMember2("");
        setPanelMember3("");
        setPanelMember4("");
        console.log(formData.get('GroupId'));
        topic.GroupId = formData.get('GroupId');
        topic.PanelMember1 = formData.get('PanelMember1');
        topic.PanelMember2 = formData.get('PanelMember2');
        topic.PanelMember3 = formData.get('PanelMember3');
        topic.PanelMember4 = formData.get('PanelMember4');
        console.log(topic);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/TopicPanels/update/${id?.id}`, topic).then((res)=>{
            console.log("return data", res);
            alert("Update Successfull!!");
        }).catch((err)=>{
            alert("update failed");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/TopicPanels/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupId(res.data.topic.GroupId);
            setPanelMember1(res.data.topic.PanelMember1);
            setPanelMember2(res.data.topic.PanelMember2);
            setPanelMember3(res.data.topic.PanelMember3);
            setPanelMember4(res.data.topic.PanelMember4);
        }).catch((err)=>console.log(err)
        );
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        children: "TOPIC PANEL REGISTRATION UPDATE"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        width: "950px",
                        height: "500px",
                        style: {
                            margin: "20px"
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: " Group ID  : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "GroupId",
                                                    onChange: (e)=>setGroupId(e.target.value)
                                                    ,
                                                    value: GroupId,
                                                    placeholder: "Update group id "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 1 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember1",
                                                    onChange: (e)=>setPanelMember1(e.target.value)
                                                    ,
                                                    value: PanelMember1,
                                                    placeholder: "Update member 1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "  Panel Member 2 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember2",
                                                    onChange: (e)=>setPanelMember2(e.target.value)
                                                    ,
                                                    value: PanelMember2,
                                                    placeholder: "update member 2 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 3 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember3",
                                                    onChange: (e)=>setPanelMember3(e.target.value)
                                                    ,
                                                    value: PanelMember3,
                                                    placeholder: "update member 3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 4 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember4",
                                                    onChange: (e)=>setPanelMember4(e.target.value)
                                                    ,
                                                    value: PanelMember4,
                                                    placeholder: "select the job title"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                            className: "btn btn-warning",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white'
                                            },
                                            type: "submit",
                                            onClick: (e)=>changeOnClick(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    className: "far fa-check-square"
                                                }),
                                                " UPDATE "
                                            ]
                                        }),
                                        " \xa0",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            className: "btn btn-warning",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: "/ViewTopis",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    marginTop: '15px'
                                                },
                                                children: "VIEW DETAILS"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}







function $0352d5313a3a1686$export$2e2bcd8739ae039() {
    const [GroupId, setGroupId] = $ltMAx$react.useState("");
    const [PanelMember1, setPanelMember1] = $ltMAx$react.useState("");
    const [PanelMember2, setPanelMember2] = $ltMAx$react.useState("");
    const [PanelMember3, setPanelMember3] = $ltMAx$react.useState("");
    const [PanelMember4, setPanelMember4] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [present] = $ltMAx$react.useState({
        GroupId: "",
        PanelMember1: "",
        PanelMember2: "",
        PanelMember3: "",
        PanelMember4: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("onclick");
        const formData = new FormData();
        formData.append("GroupId", GroupId);
        formData.append("PanelMember1", PanelMember1);
        formData.append("PanelMember2", PanelMember2);
        formData.append("PanelMember3", PanelMember3);
        formData.append("PanelMember4", PanelMember4);
        setGroupId("");
        setPanelMember1("");
        setPanelMember2("");
        setPanelMember3("");
        setPanelMember4("");
        console.log(formData.get('GroupId'));
        present.GroupId = formData.get('GroupId');
        present.PanelMember1 = formData.get('PanelMember1');
        present.PanelMember2 = formData.get('PanelMember2');
        present.PanelMember3 = formData.get('PanelMember3');
        present.PanelMember4 = formData.get('PanelMember4');
        console.log(present);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/PresentationPanels/update/${id?.id}`, present).then((res)=>{
            console.log("return data", res);
            alert("Update Successfull!!");
        }).catch((err)=>{
            alert("update failed");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/PresentationPanels/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupId(res.data.present.GroupId);
            setPanelMember1(res.data.present.PanelMember1);
            setPanelMember2(res.data.present.PanelMember2);
            setPanelMember3(res.data.present.PanelMember3);
            setPanelMember4(res.data.present.PanelMember4);
        }).catch((err)=>console.log(err)
        );
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        children: "PRESENTATION PANEL REGISTRATION UPDATE"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        width: "950px",
                        height: "500px",
                        style: {
                            margin: "20px"
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: " Group ID  : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "GroupId",
                                                    onChange: (e)=>setGroupId(e.target.value)
                                                    ,
                                                    value: GroupId,
                                                    placeholder: "Update group id "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 1 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember1",
                                                    onChange: (e)=>setPanelMember1(e.target.value)
                                                    ,
                                                    value: PanelMember1,
                                                    placeholder: "Update member 1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "  Panel Member 2 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember2",
                                                    onChange: (e)=>setPanelMember2(e.target.value)
                                                    ,
                                                    value: PanelMember2,
                                                    placeholder: "update member 2 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 3 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember3",
                                                    onChange: (e)=>setPanelMember3(e.target.value)
                                                    ,
                                                    value: PanelMember3,
                                                    placeholder: "update member 3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 4 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember4",
                                                    onChange: (e)=>setPanelMember4(e.target.value)
                                                    ,
                                                    value: PanelMember4,
                                                    placeholder: "select the job title"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                            className: "btn btn-warning",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white'
                                            },
                                            type: "submit",
                                            onClick: (e)=>changeOnClick(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    className: "far fa-check-square"
                                                }),
                                                " UPDATE "
                                            ]
                                        }),
                                        " \xa0",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            className: "btn btn-warning",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: "/ViewPresentation",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    marginTop: '15px'
                                                },
                                                children: "VIEW DETAILS"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}







function $6b010f7332ea0b55$export$2e2bcd8739ae039() {
    const [GroupId, setGroupId] = $ltMAx$react.useState("");
    const [PanelMember1, setPanelMember1] = $ltMAx$react.useState("");
    const [PanelMember2, setPanelMember2] = $ltMAx$react.useState("");
    const [PanelMember3, setPanelMember3] = $ltMAx$react.useState("");
    const [PanelMember4, setPanelMember4] = $ltMAx$react.useState("");
    const id = $ltMAx$reactrouterdom.useParams();
    const [thesis] = $ltMAx$react.useState({
        GroupId: "",
        PanelMember1: "",
        PanelMember2: "",
        PanelMember3: "",
        PanelMember4: ""
    });
    const changeOnClick = async (e)=>{
        e.preventDefault();
        console.log("onclick");
        const formData = new FormData();
        formData.append("GroupId", GroupId);
        formData.append("PanelMember1", PanelMember1);
        formData.append("PanelMember2", PanelMember2);
        formData.append("PanelMember3", PanelMember3);
        formData.append("PanelMember4", PanelMember4);
        setGroupId("");
        setPanelMember1("");
        setPanelMember2("");
        setPanelMember3("");
        setPanelMember4("");
        console.log(formData.get('GroupId'));
        thesis.GroupId = formData.get('GroupId');
        thesis.PanelMember1 = formData.get('PanelMember1');
        thesis.PanelMember2 = formData.get('PanelMember2');
        thesis.PanelMember3 = formData.get('PanelMember3');
        thesis.PanelMember4 = formData.get('PanelMember4');
        console.log(thesis);
        console.log(id);
        await ($parcel$interopDefault($ltMAx$axios)).put(`https://afsliitproject.herokuapp.com/ThesisPanels/update/${id?.id}`, thesis).then((res)=>{
            console.log("return data", res);
            alert("Update Successfull!!");
        }).catch((err)=>{
            alert("update failed");
            console.log(err);
        });
    };
    $ltMAx$react.useEffect(function effectFunction() {
        console.log("get ID", id);
        ($parcel$interopDefault($ltMAx$axios)).get(`https://afsliitproject.herokuapp.com/ThesisPanels/${id?.id}`).then((res)=>{
            console.log("data", res);
            setGroupId(res.data.thesis.GroupId);
            setPanelMember1(res.data.thesis.PanelMember1);
            setPanelMember2(res.data.thesis.PanelMember2);
            setPanelMember3(res.data.thesis.PanelMember3);
            setPanelMember4(res.data.thesis.PanelMember4);
        }).catch((err)=>console.log(err)
        );
    }, []);
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        children: "THESIS PANEL REGISTRATION UPDATE"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("table", {
                        width: "950px",
                        height: "500px",
                        style: {
                            margin: "20px"
                        },
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tr", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: " Group ID  : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "GroupId",
                                                    onChange: (e)=>setGroupId(e.target.value)
                                                    ,
                                                    value: GroupId,
                                                    placeholder: "Update group id "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 1 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember1",
                                                    onChange: (e)=>setPanelMember1(e.target.value)
                                                    ,
                                                    value: PanelMember1,
                                                    placeholder: "Update member 1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "  Panel Member 2 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember2",
                                                    onChange: (e)=>setPanelMember2(e.target.value)
                                                    ,
                                                    value: PanelMember2,
                                                    placeholder: "update member 2 "
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 3 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember3",
                                                    onChange: (e)=>setPanelMember3(e.target.value)
                                                    ,
                                                    value: PanelMember3,
                                                    placeholder: "update member 3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                    style: {
                                                        margineBottom: '5px'
                                                    },
                                                    children: "Panel Member 4 : "
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    name: "PanelMember4",
                                                    onChange: (e)=>setPanelMember4(e.target.value)
                                                    ,
                                                    value: PanelMember4,
                                                    placeholder: "select the job title"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("button", {
                                            className: "btn btn-warning",
                                            style: {
                                                textDecoration: 'none',
                                                color: 'white'
                                            },
                                            type: "submit",
                                            onClick: (e)=>changeOnClick(e)
                                            ,
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("i", {
                                                    className: "far fa-check-square"
                                                }),
                                                " UPDATE "
                                            ]
                                        }),
                                        " \xa0",
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                            className: "btn btn-warning",
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: "/ViewThesis",
                                                style: {
                                                    textDecoration: 'none',
                                                    color: 'white',
                                                    marginTop: '15px'
                                                },
                                                children: "VIEW DETAILS"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}




function $830e33d8d70cf90d$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                        children: "Student Groups - Panel Formations"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                    className: "table",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Group ID"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Students"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Topic Panel"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Presentation Panel"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                        scope: "col",
                                        children: "Thesis Panel"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tbody", {
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_1"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_2"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_3"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_4"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_5"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_6"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_7"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_8"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_9"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                            children: "Group_10"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/students`,
                                                children: "students"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddTopisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddPresentationPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("a", {
                                                href: `/AddThesisPanels`,
                                                children: "Assging  Panel"
                                            })
                                        }),
                                        "  "
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}





class $41498c9b8838c8ca$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            topic: []
        };
    }
    componentDidMount() {
        this.retrieveTopicpanel();
    }
    retrieveTopicpanel() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/TopicPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    topic: res.data.existingTopicPanels
                });
                console.log(this.state.topic);
            }
        });
    }
    //to serch specific data
    filterData(topic1, searchKey) {
        const result = topic1.filter((topic)=>topic.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            topic: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/TopicPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingTopicPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "TOPIC PANEL DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search group id and find your panel",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "id"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Group ID"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 1"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 2"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 3"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 4"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.topic.map((topic, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                    children: [
                                                        topic.GroupId,
                                                        "  "
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topic.PanelMember1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topic.PanelMember2
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topic.PanelMember3
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: topic.PanelMember4
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}





class $f561f08348261066$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            present: []
        };
    }
    componentDidMount() {
        this.retrievePresentationPanels();
    }
    retrievePresentationPanels() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/PresentationPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    present: res.data.existingPresentationPanels
                });
                console.log(this.state.present);
            }
        });
    }
    filterData(present1, searchKey) {
        const result = present1.filter((present)=>present.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            present: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/PresentationPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingPresentationPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "PRESENTATION PANEL  DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search by group id to find your panel",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "id"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Group ID"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 1"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 2"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 3"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 4"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.present.map((present, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                    children: [
                                                        present.GroupId,
                                                        "  "
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: present.PanelMember1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: present.PanelMember2
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: present.PanelMember3
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: present.PanelMember4
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}





class $3ef86e9e5ca9d6f6$export$2e2bcd8739ae039 extends $ltMAx$react.Component {
    constructor(props){
        super(props);
        this.state = {
            thesis: []
        };
    }
    componentDidMount() {
        this.retrieveThesisPanels();
    }
    retrieveThesisPanels() {
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/ThesisPanels").then((res)=>{
            if (res.data.success) {
                this.setState({
                    thesis: res.data.existingThesisPanels
                });
                console.log(this.state.thesis);
            }
        });
    }
    //to serch specific data
    filterData(thesis1, searchKey) {
        const result = thesis1.filter((thesis)=>thesis.GroupId.toLowerCase().includes(searchKey)
        );
        this.setState({
            thesis: result
        });
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;
        ($parcel$interopDefault($ltMAx$axios)).get("https://afsliitproject.herokuapp.com/ThesisPanels").then((res)=>{
            if (res.data.success) this.filterData(res.data.existingThesisPanels, searchKey);
        });
    };
    render() {
        return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                        className: "col-md-8 mt-4 mx-auto",
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            style: {
                                height: '80px',
                                width: '100%',
                                backgroundColor: "#000080",
                                marginTop: '-20px'
                            },
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                    style: {
                                        color: 'white'
                                    },
                                    children: "THESIS PANEL  DETAILS"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("hr", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                            className: "col-lg-9 mt-2 mb-2",
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "form-control",
                                type: "search",
                                placeholder: "search group id to find your panel",
                                name: "searchQuery",
                                onChange: this.handleSearchArea
                            })
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {}),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("center", {
                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("table", {
                            className: "table",
                            children: [
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("thead", {
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "id"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Group ID"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 1"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 2"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 3"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                scope: "col",
                                                children: "Member 4"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("tbody", {
                                    children: this.state.thesis.map((thesis, index)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("tr", {
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("th", {
                                                    scope: "row",
                                                    children: index + 1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("td", {
                                                    children: [
                                                        thesis.GroupId,
                                                        "  "
                                                    ]
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: thesis.PanelMember1
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: thesis.PanelMember2
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: thesis.PanelMember3
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: thesis.PanelMember4
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("td", {
                                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                                                })
                                            ]
                                        }, index)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("br", {})
                ]
            })
        });
    }
}


function $da11a1101b2a894a$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        className: "App",
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.BrowserRouter, {
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactrouterdom.Routes, {
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/EveHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($04a304321dd7eef7$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/supervEveHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($1af2306d0f141a54$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/newEvaluationSuperv",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($3036718d29464a66$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/SupervevaluationEdit/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($1e0ecaf08d58571f$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/CheckOneSupervEve/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($a5d9a153b330a4e1$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/panelEveHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($61434352276ed6a2$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/newEvaluationPanel",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($31311cc7426deea7$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/PanelevaluationEdit/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($73093b13fcb70fcb$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/CheckOnePanelEve/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($0cb5b07d06a6a788$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/StudentSubHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($172eb77f73ac3814$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/SubmitNavbar",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($382ddaa29abfe9f9$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/StudentAdd",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($9b8f63455c13f7af$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/DocumentSubHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ef2e4ff15351846d$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/TempUpHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ca5463abeafdeba1$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/TempNavbar",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($6bc4cb0da640cea7$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/TempAdd",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($c51ade6a2eccce22$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AdminAdd",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($b8b54a3af5d69ae2$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AdminUpHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($8bf6d194969daebf$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/UploadNaviAdmin",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($cc47c293653da663$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/EvaluationResult",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($7c7b6d280fac5ffe$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/TemplateDownload",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($601e3897af5126fc$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/DocumentDownload",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($0d45c31d76660f32$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/STDdownloads",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($af85ff5559db8900$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/DocEveResult",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($c90c84610ce3f012$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/DocEveOneResult/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($47d3f2081d71cff4$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/PreseEveResult",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($e7f9587c43bb916b$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/PresEveOneResult/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($59177492ce9c1b4e$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($9e60e4b88b4afc2e$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/groupReg",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($89b2533ccfee3b3f$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/groups",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($739a5b9bddd5848e$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/topicReg",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($378695bfd0e51975$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/addArea",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($d7bfee73b3ac2fe6$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/details/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($00f8db41d718b992$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/adminHome",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($e4260391fe60b1df$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/view",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($d3cb88d203803a06$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Areas",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($2b21758ba59fa2af$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/ViewAreas",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($a5b667f78926e161$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Supervisors",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($33d23507225b5ef0$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Response/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($df8d3d3f875c458a$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/HomeAnodya",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($a75f642b815fc93f$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Registration",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($678948f893e4d8e0$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Login",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($41f71f5a6f8b36cf$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AdminLogin",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($40c9d7c3d9ae3a5c$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/StaffLogin",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($007307e82316f5c7$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AddTopisPanels",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($6f15b07f3c41c94e$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AddPresentationPanels",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($47564792bf847415$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/AddThesisPanels",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($2ac390e2c12421db$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/ViewTopis",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($fbcc20d0315acb34$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/ViewThesis",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($0fa0cf2fb7e36115$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/ViewPresentation",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($f660256451162782$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Viewallusers",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($403313e75659f647$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/UpdateTopics/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($472e2ee2ccdfa0c9$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Updatepresentation/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($0352d5313a3a1686$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/UpdateThesis/:id",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($6b010f7332ea0b55$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/Groupids",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($830e33d8d70cf90d$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/S_ViewTopis",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($41498c9b8838c8ca$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/S_ViewPresentation",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($f561f08348261066$export$2e2bcd8739ae039, {})
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                        path: "/S_ViewThesis",
                        element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($3ef86e9e5ca9d6f6$export$2e2bcd8739ae039, {})
                    })
                ]
            })
        })
    });
}


($parcel$interopDefault($ltMAx$reactdom)).render(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($da11a1101b2a894a$export$2e2bcd8739ae039, {}), document.getElementById("app"));


//# sourceMappingURL=index.js.map
