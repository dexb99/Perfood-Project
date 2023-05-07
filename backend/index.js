const express = require('express');
const browser = require('browser-detect');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const cookieSession = require('cookie-session');
const { body, validationResult } = require('express-validator')
const { send } = require('process');
const { result } = require('lodash');
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: false }))

app.set('pages', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

app.use(cookieSession({
    name: 'sesssion',
    keys: ['key1', 'key2'],
    maxAge: 3500 * 100 // 1hr
}))


//Delcaring Custom Middleware

const ifNotlogedIn = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.render('User')
    } else {
        return res.render('Admin')
    }
    next();
}


//uploads images to uploads file 
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads/images')
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + file.originalname);
    }
})
const upload = multer({
    storage: storage
})
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "perfood"
});

app.get('/browserName', (req, res) => {
    const result = browser(req.headers['user-agent']);
    // console.log(result)
    res.send(result)
})


app.put('/updateStatus/:id', (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    db.query('UPDATE survey SET Survey_Status=? WHERE Survey_ID = ?', [status, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
});


// โค้ดสำหรับ insert personal

app.post('/createpersonal', upload.fields([{ name: 'Personal_IMG', maxCount: 1 }, { name: 'Suggest_IMG', maxCount: 1 }]), (req, res) => {
    const Personal_ID = req.body.Personal_ID
    const Personal_Name = req.body.Personal_Name
    const Personal_Detail = req.body.Personal_Detail
    const Threshold = req.body.Threshold

    let Personal_IMG = null
    let Suggest_IMG = null

    if (req.files['Personal_IMG']) {
        Personal_IMG = req.files['Personal_IMG'][0].filename;
        console.log(Personal_IMG)
    } else {
        console.log(Personal_IMG)
    }

    if (req.files['Suggest_IMG']) {
        Suggest_IMG = req.files['Suggest_IMG'][0].filename;
        console.log(Suggest_IMG)
    } else {
        console.log(Suggest_IMG)
    }
    db.query("INSERT INTO personal (Personal_ID, Personal_Name, Personal_Detail, Threshold, Personal_IMG,Suggest_IMG) VALUES (?,?,?,?,?,?) ", [Personal_ID, Personal_Name, Personal_Detail, Threshold, Personal_IMG, Suggest_IMG], (err, result) => {
        if (err) {
            console.log(err);
        } else {
        }
    })
})



//Update personal
app.put('/updatepersonal', upload.fields([{ name: 'Personal_IMG', maxCount: 1 }, { name: 'Suggest_IMG', maxCount: 1 }]), (req, res) => {
    const Personal_ID = req.body.Personal_ID;
    const Personal_Name = req.body.Personal_Name;
    const Personal_Detail = req.body.Personal_Detail;
    const Threshold = req.body.Threshold;

    let Personal_IMG = null
    let Suggest_IMG = null

    if (req.files['Personal_IMG']) {
        Personal_IMG = req.files['Personal_IMG'][0].filename;
        console.log(Personal_IMG)
    } else {
        Personal_IMG = req.body.Personal_IMG;
        console.log(Personal_IMG)
    }

    if (req.files['Suggest_IMG']) {
        Suggest_IMG = req.files['Suggest_IMG'][0].filename;
        console.log(Suggest_IMG)
    } else {
        Suggest_IMG = req.body.Suggest_IMG;
        console.log(Suggest_IMG)
    }
    db.query("UPDATE `personal` SET Personal_Name = ?, Personal_Detail = ?, Personal_IMG = ?, Threshold = ?,Suggest_IMG = ? WHERE `personal`.`Personal_ID` = ? ", [Personal_Name, Personal_Detail, Personal_IMG, Threshold, Suggest_IMG, Personal_ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //
        }
    })
})
app.put('/updateNoimg', (req, res) => {
    const Personal_ID = req.body.Personal_ID
    const Personal_Name = req.body.Personal_Name
    const Personal_Detail = req.body.Personal_Detail
    const Threshold = req.body.Threshold

    db.query("UPDATE `personal` SET Personal_Name = ?, Personal_Detail = ?, Threshold = ?  WHERE `personal`.`Personal_ID` = ? ", [Personal_Name, Personal_Detail, Threshold, Personal_ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //
        }
    })
})
app.delete('/deletePERSONAL/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM personal WHERE Personal_ID = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Personal_ID: ${id} has deleted`)
        }
    });
})

//create response
app.post('/createresponse', (req, res) => {
    // const responID = req.body.Response_ID
    const Survey_ID = req.body.Survey_ID
    db.query("INSERT INTO response (Survey_ID, TimeStamp, User_Rate) VALUES (?,current_timestamp(),'') ", [Survey_ID], (err, result) => {
        if (err) {
            console.log(err);
        }
    });
    //response response ID 
    db.query("SELECT Response_ID FROM response WHERE Response_ID = (SELECT MAX(Response_ID) FROM response) ", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
})

//get admin data
app.get('/admin', (req, res) => {
    db.query("SELECT * FROM admin", (err, result) => {
        if (err) {
            console.log(err);

        } else {
            res.send(result);
        }
    });
});
app.get('/question', (req, res) => {
    db.query("SELECT * FROM question", (err, result) => {
        if (err) {
            console.log(err);

        } else {
            res.send(result);
        }
    });
});

app.post('/createsurvey', (req, res) => {
    const surveyID = req.body.surveyID
    const survey = req.body.survey

    db.query(`INSERT INTO survey (Survey_ID,Survey_Name) VALUES (?,?)`, [surveyID, survey], (err, result) => {
        if (err) {
            console.log(err);

        } else {
            console.log('inserted')
        }
    })
})
app.post('/createquestion', (req, res) => {
    const surveyID = req.body.surveyID
    const question = req.body.question
    db.query(`INSERT INTO question (Question_Text,Survey_ID) VALUES (?,?)`, [question, surveyID], (err, result) => {
        if (err) {
            console.log(err);

        } else {
            console.log('inserted')
        }
    })

})
app.post('/createchoice', (req, res) => {
    const questionid = req.body.questionid
    const choiceID = req.body.choiceID
    const choicetext = req.body.choicetext
    const score = req.body.score
    db.query(`INSERT INTO choice (Choice_ID,Choice_text,Choice_Score,Question_ID) VALUES (?,?,?,?)`, [choiceID, choicetext, score, questionid], (err, result) => {
        if (err) {
            console.log(err);

        } else {
            console.log('inserted')
        }
    })


})


// UPDATE and question and choice
app.put('/updatesurvey', (req, res) => {
    const surveyID = req.body.surveyID
    const survey = req.body.survey

    db.query("UPDATE survey SET Survey_Name = ? WHERE `survey`.`Survey_ID`=?", [survey, surveyID], (err, result) => {
        if (err) {
            console.log(err);

        } else {
            // console.log(result)
        }
    })
})
app.put('/updatequestion', (req, res) => {
    const questionid = req.body.questionid
    const question = req.body.question
    db.query("UPDATE question SET Question_Text = ? WHERE `question`.`Question_ID` = ?", [question, questionid], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            //
        }
    })
})
app.put('/updatechoice', (req, res) => {
    const choiceID = req.body.choiceID
    const choicetext = req.body.choicetext
    const score = req.body.score
    db.query("UPDATE choice SET Choice_text = ?, Choice_Score = ? WHERE `choice`.`Choice_ID` = ?", [choicetext, score, choiceID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log('inserted')
        }
    })
})
app.get('/getBarchart', (req, res) => {
    db.query("SELECT * FROM num_personal", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const chartData = result.map(row => ({
                label: row.Personal_Name,
                value: row.Number
            }))
            res.send(chartData)
        }
    })
})

app.get('/getSurvey', (req, res) => {
    db.query("SELECT * FROM survey", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})
app.get('/choice', (req, res) => {
    db.query("SELECT * FROM choice", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})
app.get('/personal', (req, res) => {
    db.query("SELECT * FROM personal", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);

        }
    });
})
app.get('/quesion_score', (req, res) => {
    db.query("SELECT * FROM question_score", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);

        }
    });
})
app.get('/response', (req, res) => {
    db.query("SELECT * FROM response", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})



app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM admin WHERE Username = ? AND Password = ?", [username, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง" })
            }
        }
    });
})

app.get('/personalImgById/:id', (req, res) => {
    const id = req.params.id;
    db.query("SELECT Personal_IMG FROM personal WHERE Personal_ID = ?", [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const imagePath = result[0].Personal_IMG;
            res.sendFile(path.join(__dirname, 'uploads', 'images', imagePath));
        }
    });
})
app.post('/quiz', (req, res) => {
    const choice = req.body
    let totalscore = 0
    for (let i = 0; i < choice.length; i++) {
        totalscore += choice[i].question_score
    }

    db.query(`SELECT * FROM personal WHERE Threshold >= ? limit 1;`, [totalscore], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            const data = result.map(personal => {
                return {
                    ...personal,
                    totalscore: totalscore
                }
            });
            res.send(data);
        }
    });
})

app.put('/rating', (req, res) => {
    const response_ID = req.body.Response_ID;
    const rating = req.body.User_Rate;
    db.query(`UPDATE response SET User_Rate = ? WHERE response.Response_ID = ?;`, [rating, response_ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})
app.post('/result', (req, res) => {
    const response_ID = req.body.Response_ID;
    const personal_ID = req.body.Personal_ID;
    const Resultscore = req.body.Resultscore;
    db.query(`INSERT INTO result (Response_ID,resultScore,Personal_ID) VALUES (?,?,?)`, [response_ID, Resultscore, personal_ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})


//add questionscore per user
app.post('/questscore', (req, res) => {
    const response_ID = req.body.Response_ID;
    const question_ID = req.body.Question_ID;
    const choice_ID = req.body.choice_ID;
    const Question_Score = req.body.Question_score;
    db.query(`INSERT INTO question_score (Response_ID, Question_ID, Choice_ID, Question_Score) VALUES (?,?,?,?)`, [response_ID, question_ID, choice_ID, Question_Score], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

//getpersonal byid
app.get('/personal/:id', (req, res) => {
    const PER_ID = req.params.id
    db.query('SELECT * FROM personal WHERE Personal_ID = ?', [PER_ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//จำนวนคนทำกับคนที่เข้ามาดูเฉยๆ
app.get('/getVieworDo', (req, res) => {
    db.query("SELECT * FROM num_response", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const Number = result.map(row => ({
                type: row.Done_Survey,
                number: row.number
            }))
            res.send(Number)
        }
    })
})
app.listen('3001', () => {
    // console.log('server is runing on port 3001');
})