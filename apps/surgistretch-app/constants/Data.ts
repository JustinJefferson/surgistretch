import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons/faHandHoldingMedical'
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons/faHouseChimneyMedical'

export const ANTIROTATION_PRESS = "Antirotation Press";
export const CHAIR_CAT_COW = "Chair Cat-Cow";
export const CHIN_TUCKS = "Chin Tucks";
export const DOORWAY_ARM_STRETCHES = "Doorway Arm Stretches";
export const ELASTIC_BAND_BRIDGE = "Elastic Band Bridge";
export const ELASTIC_BAND_CHOPS = "Elastic Band Chops";
export const FABER_STRETCH = "Faber Stretch";
export const HEEL_LIFTS = "Heel Lifts";
export const HINGE = "Hinge";
export const HIP_FLEXOR_STRETCH = "Hip Flexor Stretch";
export const KNEELING_CHOPS = "Kneeling Chops";
export const LATERAL_PLANK_WITH_CLAMS = "Lateral Plank with Clams";
export const MEDICINE_BALL_SQUAT = "Medicine Ball Squat";
export const PIRIFORMIS_STRETCH = "Piriformis Stretch";
export const PRONE_TS = "Prone T's";
export const QUADRUPED_THORACIC_ROTATION = "Quadruped Thoracic Rotation";
export const SCAPULAR_RETRACTION = "Scapular Retraction";
export const SCAPULAR_RETRACTION_AS = "Scapular Retractions A's";
export const SEATED_PRETZEL = "Seated Pretzel";
export const SHOULDER_BLADE_RETRACTIONS = "Shoulder Blade Retractions";
export const SIDE_LAYING_TRUNK_ROTATION = "Sidelaying Trunk Rotation";
export const SINGLE_LEG_DEADLIFTS = "Single Leg Deadlifts";
export const SQUAT_WITH_HIP_HINGE = "Squat with Hip Hinge";
export const SQUATS = "Squats";
export const STANDING_DEADLIFTS = "Standing Deadlifts";
export const STANDING_LAT_PULL = "Standing Lat Pull";
export const STANDING_TRUNK_ROTATION = "Standing Trunk Rotation";
export const SUPINE_PELVIC_TILT = "Supine Pelvic Tilt";
export const TRUNK_EXTENSION = "Trunk Extension";

export const exerciseData = [
  {
    "id": 1,
    "title": "Intraoperative Micro breaks",
    "subheading": "micro-breaks during surgery",
    "category": "Intraoperative Exercise",
    "icon": faUserDoctor,
    "cards": [
      {
        "title": CHIN_TUCKS,
        "video": "Chin_Tucks",
        "description": "This exercise strengthens the muscles in the front of the neck and stretches the muscles at the back of the neck. Specifically impacts the cervical flexors, sternocleidomastoid, trapezius, and levator scapulae."
      },
      {
        "title": HINGE,
        "video": "Hinge",
        "description": "This exercise engages the glutes, hamstrings, and core muscles. This can help improve posture and hip stability, helping to protect the lower back."
      },
      {
        "title": SCAPULAR_RETRACTION,
        "video": "Scapular_Retraction",
        "description": "This exercise engages the rhomboid minor and major, middle trapezius, latissimus dorsi, and levator scapulae. This allows increased shoulder strength, prevents shoulder injuries, and improves posture."
      },
      {
        "title": SQUATS,
        "video": "Squats",
        "description": "This exercise engages your quads, glutes, adductors, lower back, and core. This will help strengthen your legs, back, and core and help improve balance and prevent injury."
      },
      {
        "title": STANDING_DEADLIFTS,
        "video": "Standing_Deadlifts",
        "description": "This exercise engages muscles in your back and legs to improve posture and help prevent back injury or pain. "
      }
    ]
  },
  {
    "id": 2,
    "title": "Stretches Between Surgeries",
    "subheading": "stretches between operations",
    "category": "In-between Surgery Exercise",
    "icon": faHandHoldingMedical,
    "cards": [
      {
        "title": CHAIR_CAT_COW,
        "video": "Chair_Cat_Cow",
        "description": "This exercise engages the abdomen and back; it helps stretch the back and neck and increases spinal flexibility."
      },
      {
        "title": FABER_STRETCH,
        "video": "Farber_Stretch",
        "description": "This exercise helps to stretch the muscles in the pelvis and hips. It helps prevent hip pain and can help with flexibility."
      },
      {
        "title": HEEL_LIFTS,
        "video": "Heel_Lifts",
        "description": "This exercise helps strengthen muscles in the calf and can also help make the ankles stronger. This may also help with Achilles tendon pain."
      },
      {
        "title": HIP_FLEXOR_STRETCH,
        "video": "Hip_Flexor_Stretch",
        "description": "This exercise helps to stretch the hip flexors; this can result in increased hip mobility, less hip pain, and improved posture."
      },
      {
        "title": PIRIFORMIS_STRETCH,
        "video": "Piriformis_Stretch",
        "description": "This exercise stretches the piriformis muscle, as well as the glutes. This stretch can help with sciatic pain."
      }
    ]
  },
  {
    "id": 3,
    "title": "Home Stretching Exercises",
    "subheading": "in-depth stretching exercises",
    "category": "At Home Exercise",
    "icon": faHouseChimneyMedical,
    "cards": [
      {
        "title": ANTIROTATION_PRESS,
        "video": "Antirotation_Press",
        "description": "This exercise helps develop core stability and strength. "
      },
      {
        "title": DOORWAY_ARM_STRETCHES,
        "video": "Doorway_Arm_Stretches",
        "description": "This exercise stretches chest and shoulder muscles, specifically the pectoralis major, the pectoralis minor, and the anterior deltoid. "
      },
      {
        "title": ELASTIC_BAND_BRIDGE,
        "video": "Elastic_Band_Bridge",
        "description": "This exercise strengthens the glutes, lower back, and the hamstring muscles. It improves core stability and can improve posture."
      },
      {
        "title": ELASTIC_BAND_CHOPS,
        "video": "Elastic_Band_Chops",
        "description": "This exercise strengthens the core, specifically the obliques and the abdominal muscles."
      },
      {
        "title": KNEELING_CHOPS,
        "video": "Kneeling_Chops",
        "description": "This exercise strengthens the core, specifically the obliques and the abdominal muscles. This variation allows more focus on the core muscles as the legs are not involved in the movement."
      },
      {
        "title": LATERAL_PLANK_WITH_CLAMS,
        "video": "Lateral_Plank_With_Clams",
        "description": "This exercise improves core stability while exercising the hips."
      },
      {
        "title": MEDICINE_BALL_SQUAT,
        "video": "Medicine_Ball_Squat",
        "description": "This exercise strengthens the core and lower body. "
      },
      {
        "title": PRONE_TS,
        "video": "Prone_Ts",
        "description": "This exercise strengthens the muscles of the middle back, specifically the posterior deltoids and trapezius muscles."
      },
      {
        "title": QUADRUPED_THORACIC_ROTATION,
        "video": "Quadruped_Thoracic_Rotation",
        "description": "This exercise improves thoracic spine mobility. This can also help prevent neck or back pain."
      },
      {
        "title": SCAPULAR_RETRACTION_AS,
        "video": "Scapular_Retractions_As",
        "description": "This helps to strengthen the muscles of the shoulder and middle back. "
      },
      {
        "title": SEATED_PRETZEL,
        "video": "Seated_Pretzel",
        "description": "This exercise helps to stretch out the obliques, gluteal muscles, and hip abductors. This can help relieve tension in the lower back and hips."
      },
      {
        "title": SHOULDER_BLADE_RETRACTIONS,
        "video": "Shoulder_Blade_Retractions",
        "description": "This exercise engages the rhomboid minor and major, middle trapezius, latissimus dorsi, and levator scapulae. This allows increased shoulder strength, prevents shoulder injuries, and improves posture."
      },
      {
        "title": SIDE_LAYING_TRUNK_ROTATION,
        "video": "Sidelaying_Trunk_Rotation",
        "description": "This exercise increases thoracic spine flexibility."
      },
      {
        "title": SINGLE_LEG_DEADLIFTS,
        "video": "Single_Leg_Deadlifts",
        "description": "This exercise helps to increase overall balance, as well as strengthening the glutes, hamstrings, calf muscles, and the core. "
      },
      {
        "title": SQUAT_WITH_HIP_HINGE,
        "video": "Squat_With_Hip_Hinge",
        "description": "This exercise strengthens the hamstrings and glutes, as well as strengthening core muscles."
      },
      {
        "title": STANDING_LAT_PULL,
        "video": "Standing_Lat_Pull",
        "description": "This exercise strengthens the latissimus dorsi, as well as arm and cores muscles."
      },
      {
        "title": STANDING_TRUNK_ROTATION,
        "video": "Standing_Trunk_Rotation",
        "description": "This exercise helps to strengthen core muscles."
      },
      {
        "title": SUPINE_PELVIC_TILT,
        "video": "Supine_Pelvic_Tilt",
        "description": "This exercise strengthens core muscles that support the lower back. It can help prevent lower back pain."
      },
      {
        "title": TRUNK_EXTENSION,
        "video": "Trunk_Extension",
        "description": "This exercise strengthens the lower back and core and helps to prevent lower back pain."
      }
    ]
  },
]