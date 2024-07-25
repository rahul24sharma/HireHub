import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Grid } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import React from "react";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "http://localhost:4000/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <>
      <CssVarsProvider>
        <main style={{ marginTop: "5%" }}>
        <form onSubmit={handleJobPost}>
          <Sheet
            sx={{
              width: 500,
              mx: "auto", // margin left & right
              my: 1, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Create a New Job Listing.</Typography>
            </div>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Job Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Category</FormLabel>
                  <Select
                    value={category}
                    onChange={(e, newValue) => setCategory(newValue)}
                  >
                    <Option value="">Select Category</Option>
                    <Option value="Graphics & Design">Graphics & Design</Option>
                    <Option value="Mobile App Development">
                      Mobile App Development
                    </Option>
                    <Option value="Frontend Web Development">
                      Frontend Web Development
                    </Option>
                    <Option value="MERN Stack Development">
                      MERN Stack Development
                    </Option>
                    <Option value="Account & Finance">Account & Finance</Option>
                    <Option value="Artificial Intelligence">
                      Artificial Intelligence
                    </Option>
                    <Option value="Video Animation">Video Animation</Option>
                    <Option value="MEAN Stack Development">
                      MEAN Stack Development
                    </Option>
                    <Option value="MEVN Stack Development">
                      MEVN Stack Development
                    </Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Input
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel>Salary Type</FormLabel>
                  <Select
                    value={salaryType}
                    onChange={(e, newValue) => setSalaryType(newValue)}
                  >
                    <Option value="">Salary Type</Option>
                    <Option value="Fixed Salary">Fixed Salary</Option>
                    <Option value="Ranged Salary">Ranged Salary</Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Textarea
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
            />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {salaryType === "default" ? (
                  <p>Please provide Salary Type *</p>
                ) : salaryType === "Fixed Salary" ? (
                  <FormControl fullWidth>
                    <FormLabel>Fixed Salary</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter Fixed Salary"
                      value={fixedSalary}
                      onChange={(e) => setFixedSalary(e.target.value)}
                    />
                  </FormControl>
                ) : (
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                      <FormLabel>Salary From</FormLabel>

                        <Input
                          type="number"
                          placeholder="Salary From"
                          value={salaryFrom}
                          onChange={(e) => setSalaryFrom(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                      <FormLabel>Salary To</FormLabel>

                        <Input
                          type="number"
                          placeholder="Salary To"
                          value={salaryTo}
                          onChange={(e) => setSalaryTo(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>


            <Button type="submit" sx={{ mt: 1 /* margin top */ }}>
              Create
            </Button>
            
          </Sheet>
          </form>
        </main>
      </CssVarsProvider>
    </>
  );
};

export default PostJob;
