import React from 'react'

export default function boostrap() {
    const studentDetail = [
        {
            name: "Rahul",
            rool_no: 10,
            class: "1st",
            school: "ABC",
        },
        {
            name: "Sharan",
            rool_no: 11,
            class: "2st",
            school: "ABC",
        },
        {
            name: "Karthik",
            rool_no: 8,
            class: "1st",
            school: "ABC",
        },
        {
            name: "Karthik",
            rool_no: 8,
            class: "1st",
            school: "ABC",
        }


    ]

    return (
        <div style={{ backgroundColor: "#ffffe6", fontFamily: "Sofia" }}>
            <br /> <h1>Boostrap</h1> <br />
            <div lg="4" style={{ display: "flex" }}>
                {studentDetail.map((i) => {
                    return (
                        
                        <div className="card" style={{width: "14rem",margin:"auto"}}>
                            <img src="image.jpeg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{i.name}</h5>
                                    <h5 className="card-title">{i.rool_no}</h5>
                                    <h5 className="card-title">{i.class}</h5>
                                    <h5 className="card-title">{i.school}</h5>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div> 
                        </div>
                    )
                })}

            </div>

        </div>
    )
}
