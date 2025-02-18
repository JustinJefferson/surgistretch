import {
  ANTIROTATION_PRESS,
  CHAIR_CAT_COW,
  CHIN_TUCKS,
  DOORWAY_ARM_STRETCHES,
  ELASTIC_BAND_BRIDGE,
  ELASTIC_BAND_CHOPS,
  FABER_STRETCH,
  HEEL_LIFTS,
  HINGE,
  HIP_FLEXOR_STRETCH,
  KNEELING_CHOPS,
  LATERAL_PLANK_WITH_CLAMS,
  MEDICINE_BALL_SQUAT,
  PIRIFORMIS_STRETCH,
  PRONE_TS,
  QUADRUPED_THORACIC_ROTATION,
  SCAPULAR_RETRACTION,
  SCAPULAR_RETRACTION_AS,
  SEATED_PRETZEL,
  SHOULDER_BLADE_RETRACTIONS,
  SIDE_LAYING_TRUNK_ROTATION,
  SINGLE_LEG_DEADLIFTS,
  SQUAT_WITH_HIP_HINGE,
  SQUATS,
  STANDING_DEADLIFTS,
  STANDING_LAT_PULL,
  STANDING_TRUNK_ROTATION,
  SUPINE_PELVIC_TILT,
  TRUNK_EXTENSION
} from '@/constants/Data'

const getDefautltMP4 = () => require('../assets/videos/OR_Chin_Tucks.mp4');

export const getVideoMP4 = ( title ) => {
  if (typeof title !== "string") {
    return getDefautltMP4();
  }
  if (title === ANTIROTATION_PRESS) {
    return require('../assets/videos/Antirotation_Press.mp4');
  }
  if (title === CHAIR_CAT_COW) {
    return require('../assets/videos/Chair_Cat_Cow.mp4');
  }
  if (title === CHIN_TUCKS) {
    return require('../assets/videos/OR_Chin_Tucks.mp4');
  }
  if (title === DOORWAY_ARM_STRETCHES) {
    return require('../assets/videos/Doorway_Arm_Stretches.mp4');
  }
  if (title === ELASTIC_BAND_BRIDGE) {
    return require('../assets/videos/Elastic_Band_Bridge.mp4');
  }
  if (title === ELASTIC_BAND_CHOPS) {
    return require('../assets/videos/Elastic_Band_Chops.mp4');
  }
  if (title === FABER_STRETCH) {
    return require('../assets/videos/Faber_Stretch.mp4');
  }
  if (title === HEEL_LIFTS) {
    return require('../assets/videos/Heel_Lifts.mp4');
  }
  if (title === HINGE) {
    return require('../assets/videos/OR_Hinge.mp4');
  }
  if (title === HIP_FLEXOR_STRETCH) {
    return require('../assets/videos/Hip_Flexor_Stretch.mp4');
  }
  if (title === KNEELING_CHOPS) {
    return require('../assets/videos/Kneeling_Chops.mp4');
  }
  if (title === LATERAL_PLANK_WITH_CLAMS) {
    return require('../assets/videos/Lateral_Plank_With_Clams.mp4');
  }
  if (title === MEDICINE_BALL_SQUAT) {
    return require('../assets/videos/Medicine_Ball_Chop_Squat.mp4');
  }
  if (title === PIRIFORMIS_STRETCH) {
    return require('../assets/videos/Piriformis_Stretch.mp4');
  }
  if (title === PRONE_TS) {
    return require('../assets/videos/Prone_Ts.mp4');
  }
  if (title === QUADRUPED_THORACIC_ROTATION) {
    return require('../assets/videos/Quadriped_Thoracic_Rotation.mp4');
  }
  if (title === SCAPULAR_RETRACTION) {
    return require('../assets/videos/OR_Scapular_Retraction.mp4');
  }
  if (title === SCAPULAR_RETRACTION_AS) {
    return require('../assets/videos/Scapular Retractions As.mp4');
  }
  if (title === SEATED_PRETZEL) {
    return require('../assets/videos/Seated_Bretzel.mp4');
  }
  if (title === SHOULDER_BLADE_RETRACTIONS) {
    return require('../assets/videos/Shoulder_Blade_Retractions.mp4');
  }
  if (title === SIDE_LAYING_TRUNK_ROTATION) {
    return require('../assets/videos/Sidelaying_Trunk_Rotation.mp4');
  }
  if (title === SINGLE_LEG_DEADLIFTS) {
    return require('../assets/videos/Single_Leg_Deadlift.mp4');
  }
  if (title === SQUAT_WITH_HIP_HINGE) {
    return require('../assets/videos/Squat_With_Hip_Hinge.mp4');
  }
  if (title === SQUATS) {
    return require('../assets/videos/OR_Squats.mp4');
  }
  if (title === STANDING_DEADLIFTS) {
    return require('../assets/videos/OR_Standing_Deadlifts.mp4');
  }
  if (title === STANDING_LAT_PULL) {
    return require('../assets/videos/Standing_Lat_Pull.mp4');
  }
  if (title === STANDING_TRUNK_ROTATION) {
    return require('../assets/videos/Standing Trunk Rotation.mp4');
  }
  if (title === SUPINE_PELVIC_TILT) {
    return require('../assets/videos/Supine_Pelvic_Tilt.mp4');
  }
  if (title === TRUNK_EXTENSION) {
    return require('../assets/videos/Trunk_Extension.mp4');
  }
}

export const getDefaultThumbnail = () => require('../assets/thumbnails/Squats.png');

export const getThumbnail = ( title ) => {
  if (typeof title !== "string") {
    return getDefaultThumbnail();
  }
  if (title === ANTIROTATION_PRESS) {
    return require('../assets/thumbnails/Antirotation_Press.png');
  }
  if (title === CHAIR_CAT_COW) {
    return require('../assets/thumbnails/Chair_CatCow.png');
  }
  if (title === CHIN_TUCKS) {
    return require('../assets/thumbnails/Chin_Tuck.png');
  }
  if (title === DOORWAY_ARM_STRETCHES) {
    return require('../assets/thumbnails/Doorway_Arm_Stretches.png');
  }
  if (title === ELASTIC_BAND_BRIDGE) {
    return require('../assets/thumbnails/Elastic_Band_Bridge.png');
  }
  if (title === ELASTIC_BAND_CHOPS) {
    return require('../assets/thumbnails/Elastic_Band_Chops.png');
  }
  if (title === FABER_STRETCH) {
    return require('../assets/thumbnails/Faber_Stretch.png');
  }
  if (title === HEEL_LIFTS) {
    return require('../assets/thumbnails/Heel_lifts.png');
  }
  if (title === HINGE) {
    return require('../assets/thumbnails/Hinge.png');
  }
  if (title === HIP_FLEXOR_STRETCH) {
    return require('../assets/thumbnails/Hip_Flexor_Stretch.png');
  }
  if (title === KNEELING_CHOPS) {
    return require('../assets/thumbnails/Kneeling_Chops.png');
  }
  if (title === LATERAL_PLANK_WITH_CLAMS) {
    return require('../assets/thumbnails/Lateral_Planks_With_Clams.png');
  }
  if (title === MEDICINE_BALL_SQUAT) {
    return require('../assets/thumbnails/Medicine_Ball_Chat_Squat.png');
  }
  if (title === PIRIFORMIS_STRETCH) {
    return require('../assets/thumbnails/Piriformis_Stretch.png');
  }
  if (title === PRONE_TS) {
    return require('../assets/thumbnails/Prone_Ts.png');
  }
  if (title === QUADRUPED_THORACIC_ROTATION) {
    return require('../assets/thumbnails/Quadriped_Thoracic_Rotation.png');
  }
  if (title === SCAPULAR_RETRACTION) {
    return require('../assets/thumbnails/Scapular_Retraction.png');
  }
  if (title === SCAPULAR_RETRACTION_AS) {
    return require('../assets/thumbnails/Scapular_Retractions_As.png');
  }
  if (title === SEATED_PRETZEL) {
    return require('../assets/thumbnails/Seated_Pretzel.png');
  }
  if (title === SHOULDER_BLADE_RETRACTIONS) {
    return require('../assets/thumbnails/Shoulder_Blade_Retractions.png');
  }
  if (title === SIDE_LAYING_TRUNK_ROTATION) {
    return require('../assets/thumbnails/Sidelaying_Trunk_Rotation.png');
  }
  if (title === SINGLE_LEG_DEADLIFTS) {
    return require('../assets/thumbnails/Single_Leg_Deadlift.png');
  }
  if (title === SQUAT_WITH_HIP_HINGE) {
    return require('../assets/thumbnails/Squat_With_Hip_Hinge.png');
  }
  if (title === SQUATS) {
    return require('../assets/thumbnails/Squats.png');
  }
  if (title === STANDING_DEADLIFTS) {
    return require('../assets/thumbnails/Standing_Deadlifts.png');
  }
  if (title === STANDING_LAT_PULL) {
    return require('../assets/thumbnails/Standing_Lat_Pull.png');
  }
  if (title === STANDING_TRUNK_ROTATION) {
    return require('../assets/thumbnails/Standing_Trunk_Rotation.png');
  }
  if (title === SUPINE_PELVIC_TILT) {
    return require('../assets/thumbnails/Supine_Pelvic_Tilt.png');
  }
  if (title === TRUNK_EXTENSION) {
    return require('../assets/thumbnails/Trunk_Extension.png');
  }
}