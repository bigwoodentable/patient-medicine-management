import { Grid, LinearProgress } from "@material-ui/core"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStocks } from "../../actions/stocks"
import { getMedFromAPI } from "../../apis/external"

function TcmAPI({ nextMed }) {
  const [medApi, setMedApi] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const timer = useRef(0)
  const count = useRef(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStocks())
  }, [])
  const meds = useSelector((state) => state.stocks)

  useEffect(() => {
    const randomNumb = Math.floor(Math.random() * meds.length)
    if (meds[randomNumb]) {
      setSearchTerm(meds[randomNumb].medName)
    }
  }, [meds, nextMed])

  // For styling - to avoid calling external API repeatedly, there is a limit of 100 free calls per day:
  // useEffect(() => {
  //   setMedApi({
  //     title: "白扁豆",
  //     info: `<p>　　白扁豆<br><br>　　SemenDolichorisAlbum<br>　　(英)WhiteHyacinthBean<br>　　【别名】　峨眉豆、藤豆、羊眼豆、肉豆。<br>　　【来源】　为豆科植物扁豆DolichoslablabL.的种子。<br><br>　　【性味】　性微温，味甘。<br><br>　　【功用主治】　健脾化湿，和中消暑。用于脾胃虚弱、食欲不振、大更溏泻、白带过多、暑湿吐泻、胸闷腹胀。<br><br>　　【植物形态】一年生缠绕草本。三出复叶，先生小叶菱状广卵形，侧生小叶斜菱状广卵形，长6～11cm，宽4.5～10.5cm，顶端短尖或渐尖，两面沿叶脉处有白色短柔毛。总状花序腋生，花2～4朵丛生于花序轴的节上。花冠白色或紫红色；子房有绢毛，基部有腺体，花柱近顶端有白色髯毛。荚果扁，镰刀形或半椭圆形，长5～7cm，种子3～5颗，白色或紫黑色。花果期7～10月。<br>　　各地有栽培。<br><br>　　【采制】9～10月摘取成熟果实，晒干，收集种子；生用或微炒用。<br><br>　　【性状】　种子扁椭圆形或扁卵圆形，长0.8～1.3cm，宽0.6～0.9cm，厚0.7cm。表面淡苋白色或淡黄色，平滑，略有光泽，一侧边缘有隆起的白色半月形种阜。质坚硬，种皮薄而脆，子叶2，肥厚，黄白色。气微，味淡，嚼之有豆腥气。<br><br>　　【化学成分】<br>　含蛋白质、蔗糖、葡萄糖、麦芽糖、水苏糖（stachyose）、棉子糖（raffinose）、L-哌可酸（L-pipecilicacid）、植物凝集素（phytoagglutinin）等。<br></p>"`,
  //   })
  // }, [])
  useEffect(async () => {
    if (searchTerm !== "" && count.current === 0) {
      setLoading(true)
      count.current = count.current + 1
      timer.current = window.setTimeout(async () => {
        getMedFromAPI(searchTerm)
          .then((info) => {
            setMedApi({
              productNdc: info.product_ndc,
              genericName: info.generic_name,
              brandName: info.brand_name,
              activeIngredients: info.active_ingredients,
              pharmClass: info.pharm_class,
              labelerName: info.labeler_name,
            })
            setLoading(false)
            count.current = 0
          })
          .catch((error) => {
            setLoading(false)
            // console.error(error)
            setMedApi({
              brandName: `Unable to load data, please press Next below. `,
            })
          })
      }, 300)
    }
  }, [searchTerm])

  return (
    <>
      {!loading && (
        <>
          <Typography
            variant={
              medApi.brandName ===
              `Unable to load data, please press Next below. `
                ? "body1"
                : "h4"
            }
            align="center"
            style={{ marginTop: "30px" }}
          >
            {medApi.brandName ? medApi.brandName : medApi.genericName}
          </Typography>

          <Box style={{ marginTop: "20px" }}>
            {medApi.genericName ? (
              <Typography style={{ fontSize: "14px" }}>
                Generic Name: {medApi.genericName}
              </Typography>
            ) : null}
            {medApi.labelerName ? (
              <Typography style={{ fontSize: "14px" }}>
                Labeler Name: {medApi.labelerName}
              </Typography>
            ) : null}
            {medApi.productNdc ? (
              <Typography style={{ fontSize: "14px" }}>
                Product NDC: {medApi.productNdc}
              </Typography>
            ) : null}
          </Box>
          <Box style={{ marginBottom: "30px" }}>
            {medApi.activeIngredients && (
              <>
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  Active Ingredients:{" "}
                </Typography>
                {medApi.activeIngredients.map((med, i) => {
                  return (
                    <Box key={i}>
                      <Typography style={{ fontSize: "14px" }}>
                        - {med.name} {med.strength}
                      </Typography>
                    </Box>
                  )
                })}
              </>
            )}
            {medApi.pharmClass && (
              <>
                <Typography style={{ fontWeight: "bold", marginTop: "15px" }}>
                  Pharmacological classsificiation:{" "}
                </Typography>
                <Box>
                  {medApi.pharmClass.map((med, i) => {
                    return (
                      <Box key={i}>
                        <Typography style={{ fontSize: "14px" }}>
                          - {med}
                        </Typography>
                      </Box>
                    )
                  })}
                </Box>
              </>
            )}
          </Box>
        </>
      )}

      {loading && (
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          style={{
            minWidth: "300px",
            height: "400px",
          }}
        >
          <LinearProgress color="primary" style={{ width: "60%" }} />
        </Grid>
      )}
    </>
  )
}

export default TcmAPI
